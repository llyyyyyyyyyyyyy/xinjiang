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
						<span v-if="(item.preData && item.preData.length > 0)" :class=" (item.preData && item.preData.length > 0) ? 'num_' : 'num'">已选景点 {{item.preData.length}}/{{item.ssCount}}</span>
						<span v-if="(!item.preData || item.preData.length == 0)" :class=" (!item.preData || item.preData.length == 0) ? 'num' : 'num_'">已选景点 0/{{item.ssCount}}</span>
					</p>
				</div>
				<router-link :class="(item.preData && item.preData.length > 0) ? 'btn_' : 'btn'" :to="{ name: 'poiList', params:{ id: item.id } }">{{(item.preData && item.preData.length > 0) ? '去修改' : '去添加'}}</router-link>

			</li>
		</ul>
		<div class="nextBtn">
			<p :class="btnFlag ? 'next' : ''" @click="next">下一步：生成行程计划</p>
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
				btnFlag:false,
			}
		},
		computed: {
			...mapGetters(['cityData']),
		},
		methods:{
			next(){
				if (!this.btnFlag) return
				this.$router.push({path: '/calculate'})
			},
			getFlag(){
				for (var i = 0; i < this.cityData.length; i++) {
					if(this.cityData[i].preData && this.cityData[i].preData.length > 0) {
						this.btnFlag = true
					}
				}
			}
		},
		created(){
			this.getFlag()
		},
	}
</script>
<style src="./choosePoi.css" scoped></style>