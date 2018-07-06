<template>
	<div id="backForthCity">
		<p class="back" @click="back">
			<img src="../../../../assets/images/delta.png" alt="">
		</p>
		<div v-for="(list, index) in lists" :key="index">
			<p class="firstKey">{{list.firstKey}}</p>
			<p class="name" v-for="city in list.citys" @click="chooseCity(city.name)" :key="city.id">{{city.name}}</p>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	export default{
		data(){
			return{
				//列表数据
				lists:[],
				flag:false,
			}
		},
		computed:{
			...mapGetters(['forthCity','backCity'])
		},
		methods:{
			chooseCity(name){
				let _this = this;
				_this.flag ? _this.$store.dispatch('fetch_forthCity',name) : _this.$store.dispatch('fetch_backCity',name)
				_this.back();
			},
			back(){
				this.$router.go(-1)
			},
			getList(){
				let _this = this;
				_this.$http.get('/city/letterGroupNew').then(function(res){
					_this.lists = res.data.data.resultList
				}, function(){

				})
			},
		},
		created(){
			let _this = this;
			_this.getList();
			_this.flag = _this.$route.params.type == 'forth' ? true : false;
		}
	}
</script>
<style src="./backForthCity.css" scoped></style>