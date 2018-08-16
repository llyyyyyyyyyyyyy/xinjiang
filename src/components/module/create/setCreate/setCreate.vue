<template>
	<div id="setCreate">
		<h3>行程设置</h3>
		<p class="introduce">让我们知道你的行程偏好，系统能更好的为你安排行程</p>
		<ul>
			<li>
				<p>
					<span class="tag"></span>
					<span>旅行偏好</span>
				</p>
				<div :class="preFlag ? 'pre' : ''">
					<span class="title">默认为您的常用场景</span>
					<span class="preferences" v-if="!preFlag">
						<img src="../../../../assets/images/hat.png" alt="">
					</span>
					<span class="scope">
						<router-link :to="{ name: 'setPreferences' }">{{pre}}</router-link>
					</span>
					<span class="leftBtn">
						<img src="../../../../assets/images/left.png" alt="">
					</span>
					<span class="preferences_1" v-if="preFlag">
						<img v-for="img in prefer" :src="img.img" alt="">
					</span>
				</div>
			</li>
			<li>
				<p>
					<span class="tag"></span>
					<span>往返城市</span>
				</p>
				<div>
					<span class="title">出发</span>
					<span class="scope">
						<router-link :to="{ name: 'backForthCity', params: { type:'forth' } }">{{forthCity.name}}</router-link>
					</span>
					<span class="leftBtn">
						<img src="../../../../assets/images/left.png" alt="">
					</span>
					<span class="title">返回</span>
					<span class="scope">
						<router-link :to="{ name: 'backForthCity', params: { type:'back' } }">{{backCity.name}}</router-link>
					</span>
					<span class="leftBtn">
						<img src="../../../../assets/images/left.png" alt="">
					</span>
				</div>
			</li>
			<li>
				<p>
					<span class="tag"></span>
					<span>出行日期</span>
				</p>
				<div>
					<span class="title">{{tripDate.week}}</span>
					<span class="scope">
						<router-link :to="{ 'name': 'chooseDate', params: { 'type': date } }">{{tripDate.time}}</router-link>
					</span>
					<span></span>
					<span></span>
					<span></span>
					<span class="leftBtn">
						<img src="../../../../assets/images/left.png" alt="">
					</span>
				</div>
			</li>
		</ul>
		<p class="btn" @click="next">下一步：选择创建方式</p>
	</div>
</template>
<script charset="utf-8" async defer>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	let weeks = ['日', '一', '二', '三', '四', '五', '六'];
	export default{
		data(){
			return{
				date:'',
				pre:'不限',
				preFlag:false,
			}
		},
		computed:{
			...mapGetters(['forthCity','backCity','tripDate','prefer'])
		},
		methods:{
			weekFormat (date) {
				if(!date) return ''
				let _date = new Date(date.split('-').join('/'));
				let _week = _date.getDay();
				return '周'  + weeks[_week]
			},
			next(){
				this.$router.push({path: '/createWay'})
			},
			dateFormat(){
				let _this = this;
				
				var now = new Date();
		        var year = now.getFullYear();       //年
		        var month = now.getMonth() + 1 >= 10 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);     //月
		        var day = now.getDate() >= 10 ? now.getDate() : '0' + now.getDate();            //日
		        _this.date = _this.tripDate.ds

		        if (_this.tripDate.time) return
		        _this.date = year + '-' + month + '-' + day
		        var time = month + '月' + day + '日'
		        var week = _this.weekFormat(year + '-' + month + '-' +day)
		        var date = {
		        	time: time,
		        	week: week,
		        	ds: year + '-' + month + '-' + day
		        }
		        _this.$store.dispatch('fetch_tripDate',date)
			}
		},
		beforeRouteEnter(to, from, next){
			next((vm) => {
				if (typeof vm.prefer[0] != 'object' || (vm.prefer.length == 1 && vm.prefer[0].name == '不限')) return
				vm.preFlag = true;
				let arr = []
				for (var i = 0; i < vm.prefer.length; i++) {
					arr.push(vm.prefer[i].name)
				}
				vm.pre = arr.join(',')
			});
		},
		created(){
			const _this = this;
			_this.dateFormat();
			if (typeof this.prefer[0] != 'object' || (this.prefer.length == 1 && this.prefer[0].name == '不限')) return
			_this.preFlag = true;
			let arr = []
			for (var i = 0; i < _this.prefer.length; i++) {
				arr.push(_this.prefer[i].name)
			}
			this.pre = arr.join(',')
		}
	}
</script>
<style src="./setCreate.css" scoped></style> 