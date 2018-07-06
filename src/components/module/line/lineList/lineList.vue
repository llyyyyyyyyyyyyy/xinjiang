<template>
	<div id="list">
		<div class="lists" v-for="(poi,index) in lists">
			<div class="imgs" @click="detailsLine(poi.id,poi)">
				<img :src="poi.img+'-GDcreateroute3.ht'" alt="">
			</div>
			<div class="conts">
				<div class="contsLeft">
					<!-- <div> -->
						<div class="days">{{poi.dayCount}}<small>天</small></div>
						<div class="cont">
							<p class="title">{{poi.title}}</p>
							<p style="font-weight: 300;color: #666;">{{poi.subTitle}}</p>
							<p class="sub">
								<span>{{poi.selectedRate}}%</span>
								<span>游客的选择</span>
							</p>
						</div>
					<!-- </div> -->
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				lists:[],
			}
		},

		filters: {
			hourFormat (h) {
				var hour = Math.floor(h);
				var minutes = h * 60;
		        var str = hour + '小时'  + ((minutes - (hour * 60)).toFixed(0)) + '分钟';
		        if (hour == 0){
		          str = ((minutes - (hour * 60)).toFixed(0)) + '分钟';
		        }else if (minutes ==0){
		          str = hour + '小时'
		        }
		        return str
			}
		},
		methods:{
			detailsLine(id,poi){
				this.$router.push({path:'/detailsLine/'+id})
			},
			getData(){
				const _this = this;
				this.$http.get('/plan/listRoute?cursor=1&fixRegionId=0&limit=1000&regionIds='+regionIds)
				.then(function(res){
					_this.lists = res.data.data.routeList[0].rlist
				}, function(){

				})
			}
		},
		mounted:function(){
			this.getData();
		},
	}
</script>
<style src="./lineList.css" scoped></style>
