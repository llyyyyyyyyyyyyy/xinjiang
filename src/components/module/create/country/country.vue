<template>
	<div id="country">
		<h3>选择国家</h3>
		<ul>
			<li v-for='(list,index) in countryList'
			:style="{backgroundImage: 'url(' + list.images[0].url + ')' }"
			@click="toDestina(list.children)"
			:key="index"
			>
				<p>
					<span>{{list.name}}</span>
					<span>{{list.code}}</span>
				</p>
			</li>
		</ul>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				countryList:[]
			}
		},
		computed: {
			...mapGetters(['destination'])
		},
		methods:{
			getData(){
				Indicator.open();
				let _this = this;
				_this.$http.get('/city/show/regions').then(function(res){
					_this.countryList = res.data.data.regions;
					Indicator.close();
				}, function(res){

				})
			},
			toDestina(children){
				// 国家数据 存入 fetch_destination
				this.$store.dispatch('fetch_destination',children);
				this.$router.push({path: '/destination'})
			}
		},
		created(){
			this.getData();
		},
	}
</script>
<style src="./country.css" scoped></style>