<template>
	<div id="detailsLine">
		<div class="headerCont">
			<div class="head_top_img">
				<img :src="lineArr.img" alt="">
				<div class="conts">
					<h3>{{lineArr.title}}</h3>
          <p class="tansuo">
            <img src="./images/tansuo.png" alt="">
            <span>{{lineArr.subTitle}}</span>
          </p>
					<p class="line">
						<img src="./images/time.png" alt="">
						<!--<span>线路</span>-->
						<span>{{lineArr.dayCount}}天</span>
            <!--<span>{{lineArr.selectedRate}}%</span>-->
            <span>{{lineArr.crowdIndex}}%{{lineArr.crowdFeatureStr}}游客的选择</span>
					</p>
				</div>
			</div>
			<div class="lineOverview">
				<p>
					<img src="./images/Rectangle 37 Copy@2x.png" alt="">
					<span>线路总览</span>
					<img src="./images/Rectangle 37@2x.png" alt="">
				</p>
				<table v-if="lineArr.description">{{lineArr.description}}</table>
			</div>
      <div class="mapBox">
        <el-amap
            v-if="center.length>0"
            vid="amapDemo"
            :center="center"
            :zoom="zoom"
            :dragEnable="dragEnable"
            class="amap-demo"
            style="width:100%;height:1.2rem;z-index:1;">
              <el-amap-marker v-for="marker in markers" :icon="marker.icon" :position="marker.position" :events="marker.events"></el-amap-marker>
            </el-amap>
      </div>
			<ul v-for="(day,index) in lineArr.dayList" class="dayConts" v-if="lineArr.dayList.length!=0">
				<li class="days">
					<span style="margin-right: 0.12rem">DAY {{index+1}}</span>

          <span>
            {{lineArr.dayList[index].citys}}
            <!--<span v-if="i != lineArr.dayList[index].citys.length-1">⇀</span>-->
          </span>

          <img style="margin-left: 0.12rem" src="./images/dizhi.png" alt="">
        </li>
				<li class="dayLine" v-if="lineArr.dayList.length>0">
					<span>今日线路：</span>{{lineArr.dayList[index].description}}
				</li>
				<li v-if="lineArr.dayList.length>0" v-for="(line,i) in lineArr.dayList[index].ssList">
					<div class="cons">
						<div class="consShow">
							<div class="showLeft">
								<img v-if="line.poiTypeStr=='ss'" src="./images/jingdian.png" alt="">
								<img v-if="line.poiTypeStr=='gouwu'" src="./images/gouwu.png" alt="">
								<img v-if="line.poiTypeStr=='tiyan'" src="./images/tiyan.png" alt="">
								<img v-if="line.poiTypeStr=='meishi'" src="./images/meishi.png" alt="">
								<img v-if="line.poiTypeStr=='yule'" src="./images/yule.png" alt="">
							</div>
							<div class="showRight">
								<p class="showRightUp">
									<span class="l">{{line.name}}</span>
									<span class="r">{{line.experienceTag}}</span>
								</p>
								<p class="showRightDown">
									<span>{{line.cityName}}</span>
									<span>游玩{{line.recomTimeStr}}
										<img v-if="!line.isShow" @click="toViewClick(index,i)" src="./images/down.png" alt="">
										<img v-if="line.isShow" @click="toViewClick(index,i)" src="./images/up.png" alt="">
									</span>
								</p>
							</div>
						</div>
						<div class="consNone" v-if="line.isShow">
              <!--<img :src="line.imgList[0].img + '-govhomeslide.ios'" alt="">-->
							<swiper :options="{ slidesPerView: 'auto'}" ref="mySwiper">
							    <swiper-slide v-for="img in line.imgList" :style="{ backgroundImage: 'url(' + img.img+'-govhomeslide.ios' + ')' }">
							    	<div class="swiper-lazy-preloader" slot="preloader"></div>
							    </swiper-slide>
						    	<div class="swiper-pagination"  slot="pagination"></div>
							</swiper>
							<div class="noneCont" v-if="line.description">
								<table>{{line.description}}</table>
								<span class="lookGL" @click="lookGL(line.poiTypeStr,line.id)">查看攻略</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				lineUrl:'/route',
				//详情数组
				lineArr:[],
				//总天数
				dayNums:0,
				//地图坐标
				zoom: 10,
				dragEnable:false,
		        center: [],
		        markers: [],
		        swiperOption: {
		          	lazyLoading : true,
		          	autoplayDisableOnInteraction : false,
		        },
		        collect:'/route/collect/add',
		        nocollect:'/route/collect/cancel',
		        collectShow:false
			}
		},
		methods:{
			lookGL:function(type,id){
				// this.$router.push({path:'/POIdetails/'+type+'/'+id});
			},
			toViewClick:function(index,i){
        		this.lineArr.dayList[index].ssList[i].isShow = !this.lineArr.dayList[index].ssList[i].isShow;
			},
			getData:function(){
        		var _this = this;
				var data = {
					id:this.$route.params.id,
					token:tool.token(),
					entry:1
				}
				this.$http.post(this.lineUrl,data)
		          .then(function(res){
		            for (let i = 0; i < res.data.data.route.dayList.length; i++) {
		              for (let j = 0; j < res.data.data.route.dayList[i].ssList.length; j++) {
		                res.data.data.route.dayList[i].ssList[j].isShow = false
		              }
		            }
		            _this.lineArr = res.data.data.route
		            _this.getMap();
		          }, function(res){

		          })
			},

			getMap:function(){
		        let _this = this;
		        var lat = _this.lineArr.dayList[0].ssList[0].latitude
		        var lon = _this.lineArr.dayList[0].ssList[0].longitude
		        _this.center = [lon, lat];
		        _this.markers = [];
		        for (var i = 0; i < _this.lineArr.dayList.length; i++) {
		          for (var j = 0; j < _this.lineArr.dayList[i].ssList.length; j++) {
		            var a = _this.lineArr.dayList[i].ssList[j].latitude
		            var o = _this.lineArr.dayList[i].ssList[j].longitude
		            _this.markers.push({
		              position: [o,a],
		              events: {
		                click() {
		                  //坐标点  点击事件
		                }
		              },
		              icon:new AMap.Icon({
		                image:_this.MD.ssMap
		              }),
		          	});
		          }
		        }
        
			}
		},
		mounted:function(){
			this.getData();
		}
	}
</script>
<style>
	@import './detailsLine.less';
	#detailsLine .swiper-container{
		padding-left: 0.13rem;
	}
	#detailsLine .swiper-container .swiper-slide{
		width:1.2rem;
		height:1.2rem;
		margin-right:0.1rem;
    	border-radius: 0.02rem;
		background: no-repeat center center;
		background-size: cover;
	}
</style>
