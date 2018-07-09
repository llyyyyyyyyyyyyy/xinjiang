<template>
	<div id="detailsLine">
		<div class="backBox">
			<!--<div class="back" @click="back"><img src="./images/Path 10 Copy 3@2x.png" alt=""></div>-->
			<!--<div class="title"></div>-->
			<div class="collBox">
				<img v-if="!collectShow" src="./images/Star Copy 4@2x.png" alt="" @click="collectClick(1)">
				<img v-if="collectShow" src="./images/ic_collected_white.png" alt="" @click="collectClick(0)">
				<!--<img src="./images/Group 11 Copy 5@2x.png" alt="" @click="fxShare">-->
			</div>
		</div>
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
        <div @click="mapClick" class="mapClick"></div>
        <el-amap
            v-if="center.length>0"
            vid="amapDemo"
            :center="center"
            :zoom="zoom"
            :dragEnable="dragEnable"
            class="amap-demo"
            style="width:100%;height:1.2rem;z-index:1;">
              <el-amap-marker v-for="(marker,index) in markers" :icon="marker.icon" :position="marker.position" :events="marker.events" :key="index"></el-amap-marker>
            </el-amap>
      </div>
			<ul v-for="(day,index) in dayNums" class="dayConts" v-if="lineArr.dayList.length!=0" :key="index">
				<li class="days">
					<span style="margin-right: 0.12rem">DAY {{index+1}}</span>

          <span>
            {{lineArr.dayList[index].citys}}
          </span>

          <img style="margin-left: 0.12rem" src="./images/dizhi.png" alt="">
        </li>
				<li class="dayLine" v-if="lineArr.dayList.length>0">
					<span>今日线路：</span>{{lineArr.dayList[index].description}}
				</li>
				<li v-if="lineArr.dayList.length>0" v-for="(line,i) in lineArr.dayList[index].ssList" :key="i">
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
							<swiper :options="{ slidesPerView: 'auto'}" ref="mySwiper">
							    <swiper-slide v-for="(img,index) in line.imgList" :style="{ backgroundImage: 'url(' + img.img+'-govhomeslide.ios' + ')' }" :key="index">
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
    <share v-if="fxFlag"></share>
    <div class="footer" v-if="addRouter">
      <p v-if="!addR" @click="addClick">添加此线路</p>
      <p v-if="addR" @click="delClick">去除此线路</p>
    </div>
	</div>
</template>
<script>
  import { mapState,mapGetters} from 'vuex'
  import {mapActions} from 'vuex'
  import share from "../share/share.vue"
	export default{
		data(){
			return{
			    addRouter:false,
        addR:false,
        fxFlag:false,
				lineID:0,
				lineUrl:'/route',
				//详情数组
				lineArr:[],
				//总天数
				dayNums:0,
				//地图坐标
				zoom: 8,
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
    components:{
		    share
    },
    computed:{
      ...mapGetters(['gmsg'])
    },
		methods:{
      addClick:function () {
        localStorage.setItem('addRouter','add')
        window.history.back()
      },
      delClick:function () {
          //this.$publicData.poiRouter
        localStorage.setItem('addRouter','del')
        window.history.back()
      },
      fxShare:function () {
        localStorage.setItem('fxName',this.lineArr.title)
        localStorage.setItem('fxURL','http://s.leyoudawa.com/r/'+this.lineID)
        this.fxFlag = !this.fxFlag
      },
      mapClick:function () {
        this.$router.push({path:'/tripMap'})
      },
      collectClick:function (num) {
        console.log(num)
        let data = {
          token:tool.token(),
          id:this.lineID
        }
        let url = window.api;
        if (num == 1){
          url += this.collect
        }else if (num == 0){
          url += this.nocollect
        }
        this.$http.post(url,data,{
          emulateJSON:true
        }).then(function (res) {
            console.log(res)
          if (num == 1 && res.data.code == '0'){
            this.collectShow = true;
            console.log('收藏')
          }else if (num == 0 && res.data.code == '0'){
            this.collectShow = false;
            console.log('取消')
          }
        },function (res) {
          console.log(res)
        })
      },
			lookGL:function(type,id){
				this.$router.push({path:'/POIdetails/'+type+'/'+id});
			},
			back:function(){
				window.history.back();
			},
			toViewClick:function(index,i){
        if (this.lineArr.dayList.length>0){

          var show = this.lineArr.dayList[index].ssList[i].isShow;
          if (show) {
            this.lineArr.dayList[index].ssList[i].isShow = false;
          }else{
            this.lineArr.dayList[index].ssList[i].isShow = true;
          }
        }

			},
			getData:function(){
        var that = this;
				var data = {
					id:this.lineID,
					token:tool.token(),
					entry:1
				}
				this.$http.post(tool.api(this.lineUrl),data,{
                    emulateJSON:true
                }).then(function(res){
                	this.dayNums = res.data.data.route.dayList.length;
                	if(res.data.data.route.dayList.length>0){
                    if (res.data.data.route.dayList[0].ssList){
                      if (res.data.data.route.dayList[0].ssList.length>0){
                        that.center.push(res.data.data.route.dayList[0].ssList[0].longitude,res.data.data.route.dayList[0].ssList[0].latitude)
                      }
                    }

                  }
                  if (res.data.data.route.dayList.length>0){
                    for(var i = 0; i < res.data.data.route.dayList.length; i++){
                      if(res.data.data.route.dayList[i].ssList){
                        if (res.data.data.route.dayList[i].ssList.length>0){
                          for(var j = 0; j < res.data.data.route.dayList[i].ssList.length; j++){
                            res.data.data.route.dayList[i].ssList[j].isShow = false;
                          }
                        }
                      }

                    }
                  }

                	if (res.data.data.route.isCollect == 1){
                    this.collectShow = true;
                  }else if (res.data.data.route.isCollect == 0){
                    this.collectShow = false;
                  }
                	this.lineArr = res.data.data.route;
                  let data = {}
                  data.name = this.lineArr.citys+this.lineArr.dayCount+'日游'
                  if(res.data.data.route.dayList.length>0){
                    data.dayList = this.lineArr.dayList
                    for (let i = 0; i < this.lineArr.dayList.length; i++){
                      if (this.lineArr.dayList[i].ssList){
                        data.dayList[i].dayLine = this.lineArr.dayList[i].ssList
                        for (let  j = 0; j < this.lineArr.dayList[i].ssList.length; j++){
                          data.dayList[i].dayLine[j].name = this.lineArr.dayList[i].ssList[j].name
                          data.dayList[i].dayLine[j].description15 = this.lineArr.dayList[i].ssList[j].description
                          data.dayList[i].dayLine[j].endTime = ''
                          data.dayList[i].dayLine[j].palyTime = this.lineArr.dayList[i].ssList[j].recomTimeStr
                          data.dayList[i].dayLine[j].type = this.lineArr.dayList[i].ssList[j].poiTypeStr
                          data.dayList[i].dayLine[j].id = this.lineArr.dayList[i].ssList[j].id
                          data.dayList[i].dayLine[j].imgs = []
                          for (let k = 0; k < this.lineArr.dayList[i].ssList[j].imgList.length; k++){
                            data.dayList[i].dayLine[j].imgs.push(this.lineArr.dayList[i].ssList[j].imgList[k].img)
                          }

                        }
                      }
                    }
                  }
                  for (let i = 0; i < this.lineArr.dayList.length; i++){
                    let cityArr = this.lineArr.dayList[i].citys.split('、')
                    this.lineArr.dayList[i].citys = cityArr.join(' ⇀ ')
                  }
                  this.$store.dispatch('sendB',data);
                	this.getMap();
                }, function(res){

                })
			},
			getMapData:function(x,y,imgStr){
				this.markers.push({
		            position: [x,y],
		            events: {
		              click() {
		              }
		            },
		            icon:new AMap.Icon({
		            	image:imgStr
		            }),
	        	});
			},
			getMap:function(){
        if (this.lineArr.dayList.length>0){
          for(var i = 0; i < this.lineArr.dayList.length; i++){
            for(var j = 0; j < this.lineArr.dayList[i].ssList.length; j++){
              var str = this.lineArr.dayList[i].ssList[j].poiTypeStr;
              var x = this.lineArr.dayList[i].ssList[j].longitude;
              var y = this.lineArr.dayList[i].ssList[j].latitude;

              if (str == 'ss') {
                this.getMapData(x,y,this.$publicData.mapImg.ss)
              }else if (str == 'gouwu') {
                this.getMapData(x,y,this.$publicData.mapImg.gouwu)
              }else if (str == 'meishi') {
                this.getMapData(x,y,this.$publicData.mapImg.meishi)
              }else if (str == 'tiyan') {
                this.getMapData(x,y,this.$publicData.mapImg.tiyan)
              }else if (str == 'yule') {
                this.getMapData(x,y,this.$publicData.mapImg.yule)
              }else if (str == 'zhusu'){
                this.getMapData(x,y,this.$publicData.mapImg.zhusu)
              }
            }
          }
        }


			}
		},
		mounted:function(){
      if (localStorage.getItem('mapType') == 'tansuo'){
          this.addRouter = false;
      }else if (localStorage.getItem('mapType') == 'xuanze'){
          this.addRouter = true;
      }
      if (this.gmsg.length>0){
        for (let i = 0;i < this.gmsg.length; i++){
          if (this.$publicData.poiRouter.id == this.gmsg[i].id){
            this.addR = true
          }
        }
      }
			this.lineID = this.$route.params.id;
			this.getData();
		}
	}
</script>
<style>
	@import '../../../assets/swiper.min.css';
	@import './detailsLine.css';
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
