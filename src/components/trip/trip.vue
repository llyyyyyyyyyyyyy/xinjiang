<template>
	<div id="trip">
		<!-- <a href="androidamap://navi?sourceApplication=appname&amp;poiname=fangheng&amp;lat=36.547901&amp;lon=104.258354&amp;dev=1&amp;style=2">导航</a> -->
		<div class="tripHeader">
			<p class="title">
				<router-link to="">
					<!-- <span><i class="icon-plus"></i></span> -->
					<span>我的行程</span>
				</router-link>
			</p>
		</div>
		<div class="trip-container">
			<div class="trips-box">
				<swiper :options="swiperOption" ref="mySwiper">
				    <swiper-slide v-for="trip in tripArr" :key="trip.id">
				    	<div class="trip-item">
								<p @click="toDetails(trip.id,trip.user.id)">
								<img :src="trip.setCoverImg">
								</p>
					    	<div class="playDay">
					    		<!-- <div class="num">{{trip.dayCount|dayFormat}}<span class="day">天</span></div> -->
					    		<div class="play">
					    			<!-- <p>{{trip.plan_name|nameFormat}}</p> -->
					    			<p>{{trip.name}}</p>
					    			<p class="time">{{trip.fromDateStr}}出发</p>
					    		</div>
					    	</div>

					    	<span v-if="trip.isExample==1" class="shili">示例</span>
					    	<div v-else class="delBtn" @click.stop="delClick(trip.id)">
					    		<span>
					    			<img src="../../assets/images/del.png">
					    			删除
					    		</span>
					    		<!-- <span @click="fenXClick">
					    			<img src="./images/share@3x.png">
					    			分享
					    		</span> -->
					    	</div>
				    	</div>
				    </swiper-slide>
				</swiper>
			</div>
		</div>
	</div>
</template>
<script scoped>
	export default{
		data(){
			return{
				tripArr:[],
				tripUrl:'/user/plan/list',
				delUrl:'/plan/delPlan',
				swiperOption: {
			        slidesPerView: 'auto',
			        centeredSlides: true,
			        spaceBetween : 25,
		        },
			}
		},
		components:{

		},
		methods:{
	      	toDetails:function (plan_id,user_id) {
	      		alert('行程详情！')
		      	return;
		        
	      	},
			delClick: function(id){
				if(window.confirm('是否删除行程?')){
					let data = {
						token: tool.token(),
						id:id,
						// appKey:'macau'
					}
					this.$http.post(this.delUrl,data,{
			            emulateJSON:true
			        }).then(function(res){
			        	if (res.data.msg == 'token为空') {
			        		alert('删除失败')
			        	};
		            this.getData();
			        }, function(res){
			        	alert(res.data.msg+"--删除失败")
			        })
				}
			},
			fenXClick: function(){
				alert('分享功能暂缓')
			},
			getData:function(){
				let _this = this;
				let data = {
					token: tool.token(),
					start: 0,
					count: 1000
				}
				this.$http.post(this.tripUrl,data).then(function(res){
		            _this.tripArr = res.data.data.list;
				}, function(err){
					alert(err)
				})
			},
		},
		//页面加载完  调用
		mounted: function(){
			this.getData();
		},
		filters: {
			dayFormat (day) {
				return day < 10 ? '0' + day : day
			},
			nameFormat (name) {
				return (name + '').indexOf('广东省') > -1 ? name.replace('广东省', '广州') : name
			}
		}
	}
</script>
<style>
	@import "trip.css";
	#trip .swiper-wrapper{
		left: -.4rem;
	}
	#trip .trip-container{
		/*display: table;*/
		width: 100%;
	}
	#trip .trip-container .trips-box{
		/*display: table-cell;*/
		/*height: 5rem;*/
	}
	#trip .trip-item .delBtn img{
		display: inline-block;
		width: 0.12rem;
		height: 0.12rem;
		vertical-align: middle;
    position: relative;
    top:-0.5px;
	}
	#trip .icon-plus{
		display: inline-block;
		width: 0.14rem;
		height: 0.14rem;
		position: relative;
		margin-right: 0.1rem;
	}
	#trip .icon-plus:before,
	#trip .icon-plus:after{
		display: block;
		content: '';
		height: 0.02rem;
		width: 100%;
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		margin: auto;
		background: #333333;
		border-radius: 0.02rem;
	}
	#trip .icon-plus:after{
		width: 0.02rem;
		height: 100%;
	}
	#trip .swiper-container{
    /*height: 4.75rem;*/
	}
	#trip .swiper-slide .trip-item{
		width: 100%;
		border-radius: .05rem;
	}
	#trip .swiper-container{
		padding-bottom: .5rem !important;
	}
</style>
