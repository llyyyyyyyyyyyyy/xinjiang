<template>
	<div id="poi">
		<router-link class="line" :to="{ name: 'lineList', params:{ region: $route.params.id, type: 'choose' } }">
			<h2>为您推荐的路线</h2>
		</router-link>
		<p v-if="preferData.length>0">按您<span>偏好</span>为您推荐的景点</p>
		<ul>
			<li v-for="(pre, index) in preferData" :key="pre.id">
				<img v-lazy="pre.img" alt="">
				<div>
					<p class="tag">
						<!-- :class="pre.perferMatch.length==0 ? 'n' : 't'" -->
						<span v-if="pre.tag">应季</span>
						<span v-for="(match, n) in pre.perferMatch" class="tags" :key="n">
							{{match.value}} <i>·</i>
						</span>
					</p>
					<p class="name">{{pre.name}}</p>
					<p class="num">景点排名第 {{index+1}} | {{pre.recomTimeStr}}</p>
				</div>
				<input type="checkbox" :id="'checkbox-0-'+index" v-model="preData" :value="pre"/><label :for="'checkbox-0-'+index"></label>
			</li>
		</ul>
		<p v-if="noPreferData.length>0">其他推荐景点</p>
		<ul>
			<li v-for="(np, index) in noPreferData" :key="np.id">
				<img v-lazy="np.img" alt="">
				<div>
					<p class="name">{{np.name}}</p>
					<p class="num">景点排名第 {{index+1}} | {{np.recomTimeStr}}</p>
				</div>
				<input type="checkbox" :id="'checkbox-1-'+index" v-model="preData" :value="np"/><label :for="'checkbox-1-'+index"></label>
			</li>
		</ul>
		<div class="btn">
			<span class="helpBtn">帮我补充</span>
			<span class="addBtn">添加完成</span>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	import { Indicator } from 'mint-ui';
	export default{
		data(){
			return{
				preData:[],
				//偏好id
				preferIds: '',
				//有玩法的景点数据
				preferData:[],
				//没有玩法的景点数据
				noPreferData:[]
			}
		},
		computed: {
			...mapGetters(['tripDate', 'prefer']),
		},
		methods:{
			getData(){
				const _this = this;
				var regionId = _this.$route.params.id;
				var data = {
					'token': tool.token(),
					"limit": "1000",
					"regionIds": regionId,
					"cursor": "1",
					"preferIds": _this.preferIds,
					"beginDate": _this.tripDate.ds,
				}
				_this.$http.post('/plan/sslistNew',data).then(function(res){
					Indicator.close();
					_this.preferData = res.data.data.regionDetail[0].preferSsList
					_this.noPreferData = res.data.data.regionDetail[0].nopreferSsList
				}, function(){

				})
			},
		},
		created(){
			if (typeof this.prefer[0] !== 'string') {
				var arr = [];
				for (var i = 0; i < this.prefer.length; i++) {
					arr.push(this.prefer[i].id)
				}
				this.preferIds = arr.join(',')
			}
			this.getData()
			Indicator.open();
		}
	}
</script>
<style src="./poiList.css" scoped></style>