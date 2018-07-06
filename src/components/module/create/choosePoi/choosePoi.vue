<template>
	<div id="choosePoi">
		<h3>
			选择各城市的景点
			<p></p>
		</h3>
		<ul>
			<li v-for="(item, index) in cityData" :key="index">
				<div>
					<div>
						<img :src="item.cover_img_1_1" alt="">
					</div>
					<p>
						<span>{{item.name}}</span>
						<span class="num">已选景点 0/{{item.ssCount}}</span>
					</p>
				</div>
				<router-link class="btn" :to="{ name: 'poiList', params:{ id: item.id } }">去添加</router-link>
			</li>
		</ul>
		<div class="nextBtn">
			<p>下一步：确认已选景点</p>
		</div>
	</div>
</template>
<script>
	import { Indicator } from 'mint-ui';
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	export default{
		data(){
			return{

			}
		},
		computed: {
			...mapGetters(['cityData']),
		},
		methods:{
			
		},
		created(){
			console.log(this.cityData)
		},
	}
</script>
<style src="./choosePoi.css" scoped></style>