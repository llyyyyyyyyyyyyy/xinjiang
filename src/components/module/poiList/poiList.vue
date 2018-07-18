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
						
						<span :class="pre.perferMatch && pre.perferMatch.length==0 ? 'n' : 't'" v-if="pre.tag">应季</span>
						<span v-for="(match, n) in pre.perferMatch" class="tags" :key="n">
							{{match.value}} <i>·</i>
						</span>
					</p>
					<p class="name">{{pre.name}}</p>
					<p class="num">景点排名第 {{index+1}} | {{pre.recomTimeStr}}</p>
				</div>
				<input type="checkbox" @change="my_change" :id="'checkbox-0-'+index" v-model="preData" :value="pre"/><label :for="'checkbox-0-'+index"></label>
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
				<input type="checkbox" @change="my_change" :id="'checkbox-1-'+index" v-model="preData" :value="np"/><label :for="'checkbox-1-'+index"></label>
			</li>
		</ul>
		<div class="btn">
			<span class="helpBtn">帮我补充</span>
			<span class="addBtn" @click='addClick'>添加完成</span>
		</div>
		<transition name="fade">
            <div class="play" v-if="playShow" transiton="fade">
				<ol>
					<li v-for="(play, n) in playData" :key="n">
						<p>
							<img :src="play.topImg" alt="">
						</p>
						<p class="count">
							<span class="name">{{play.name}}</span>
							<span class="pre">
								<span v-for="(p, a) in play.preferPlayList" :key="a">{{p.value}}<i>·</i></span>
							</span>
							<span class="time">
								<img src="../../../assets/images/time.png" alt="">
								<span>{{play.durationStr}}</span>
								<span class="num">{{play.duration}}% 人的选择</span>
							</span>
						</p>
						<p>
							<input type="radio" v-model="playID" :value="play.id" name="play" :id="'checkbox-2-'+n"/><label :for="'checkbox-2-'+n"></label>
						</p>
					</li>
					<li class="playBtn">
						<p @click="playClick">确定</p>
					</li>
				</ol>
			</div>
        </transition>
		
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
				noPreferData:[],
				// 
				indexArr:[],
				//显示玩法列表
				playShow:false,
				//玩法数据
				playData:[],
				//选择景点ID
				chooseID:[],
				//玩法id
				playID:'',
				//存已选景点 玩法  ID
				chooseData:{},
				//存储 有玩法 的景点id
				poiID:'',
			}
		},
		computed: {
			...mapGetters(['tripDate', 'prefer','cityData','chooseLine','choose_id']),
		},
		methods:{
			//默认选择  useRatio  值最高的 玩法 勾选
			playCheck(data){
				const _this = this;
				var arr = [];
				for (var i = 0; i < data.length; i++) {
					arr.push(data[i].useRatio)
				}
				arr = arr.sort((x, y) => {
					return y - x
				})
				for (var i = 0; i < data.length; i++) {
					if(data[i].useRatio == arr[0]){
						// _this.playID = data[i].id
						return data[i].id
					}
				}
			},
			//玩法页面 确定 事件
			playClick(){
				this.chooseID.push(this.chooseData)
				this.playShow = false;
				console.log(this.chooseID)
			},
			//景点去重
			poiDedupe(){
				const _this = this;
				_this.preData = _this.dedupe(_this.preData)
				for (var i = 0; i < _this.cityData.length; i++) {
					if (_this.cityData[i].id == _this.$route.params.id) {
						_this.cityData[i].preData = _this.preData
					}
				}
			},
			//input change事件 
			my_change(e){
				const _this = this;
				_this.poiDedupe();
				if (!e.target.checked  && _this.chooseLine.length > 0){
					//遍历线路中的景点id 并存储
					for (var i = 0; i < _this.chooseLine.length; i++) {
						for (var j = 0; j < _this.chooseLine[i].ssList.length; j++) {
							if (_this.chooseLine[i].ssList[j].id == e.target._value.id) {
								_this.indexArr.push(i)
							}
						}
					}
				}
				//input 勾选状态判断 玩法 并添加id 玩法个数 大于1
				if (e.target.checked && e.target._value.playList && e.target._value.playList.length > 1) {
					_this.playData = e.target._value.playList;
					_this.playID = _this.playCheck(e.target._value.playList)
					_this.poiID = e.target._value.id
					_this.playShow = true;
				}
				//input 勾选状态判断 玩法 并添加id 玩法个数 小于2
				if (e.target.checked && (e.target._value.playList && e.target._value.playList.length <= 1)) {
					_this.chooseData = {
						id: e.target._value.id
					}
					if (e.target._value.playList.length == 1) {
						_this.chooseData = {
							id: e.target._value.id,
							playId: e.target._value.playList[0].id
						}
					}
					_this.chooseID.push(_this.chooseData)
				}
				if (!e.target.checked && _this.chooseID.length > 0) {
					for (var i = 0; i < _this.chooseID.length; i++) {
						if (e.target._value.id == _this.chooseID[i].id) {
							_this.chooseID.splice(i, 1)
						}
					}
				}
				_this.chooseID = _this.dedupe(_this.chooseID);
			},
			//添加完成 按钮事件
			addClick(){
				const _this = this;
				_this.poiDedupe();

				_this.$router.go(-1)
			},
			//获取景点列表
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
					//遍历 已选 城市   判断是否有已选景点 并 勾选
					for (var i = 0; i < _this.cityData.length; i++) {
						if (_this.cityData[i].id == regionId) {
							if (_this.cityData[i].preData) {
								_this.preData = _this.cityData[i].preData
							}
						}
					}
					_this.eachLinePoi();
				}, function(){

				})
			},
			//遍历已选线路中的景点 和 景点数据 匹配
			eachLinePoi(){
				const _this = this;
				if (_this.chooseLine.length == 0) return
				var id = []
				// 遍历线路中 的景点 id
				for (let i = 0; i < _this.chooseLine.length; i++) {
					for (let j = 0; j < _this.chooseLine[i].ssList.length; j++) {
						id.push(_this.chooseLine[i].ssList[j].id)
					}
				}
				//匹配 有偏好 的景点
				for (let i = 0; i < _this.preferData.length; i++) {
					for (let j = 0; j < id.length; j++) {
						if (id[j] === _this.preferData[i].id) {
							_this.preData.push(_this.preferData[i])
						}
					}
				}
				//匹配 没有偏好 的景点
				for (let i = 0; i < _this.noPreferData.length; i++) {
					for (let j = 0; j < id.length; j++) {
						if (id[j] === _this.noPreferData[i].id) {
							_this.preData.push(_this.noPreferData[i])
						}
					}
				}
				_this.preData = _this.dedupe(_this.preData)
			},
			//数组去重
			dedupe(arr){
				var result = [],
				i,
				j,
				len = arr.length;
				for (i = 0; i < len; i++) {
					for(j = i+1; j < len; j++){
						if (arr[i].id === arr[j].id) {
							j = ++i;
						}
					}
					result.push(arr[i])
				}
				return result
			},
			dedupe_(arr){
				var result = [],
				i,
				j,
				len = arr.length;
				for (i = 0; i < len; i++) {
					for(j = i+1; j < len; j++){
						if (arr[i] === arr[j]) {
							j = ++i;
						}
					}
					result.push(arr[i])
				}
				return result
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
			if (this.choose_id.length > 0) {
				this.chooseID = this.choose_id
			}
			
			this.getData()
			Indicator.open();
		},
		//离开页面 出发的 周期钩子
		destroyed () {
			this.indexArr = this.dedupe_(this.indexArr).sort( (x, y) => {
				return y - x
			} )
			for (var i = 0; i < this.indexArr.length; i++) {
				var a = this.indexArr[i];
				this.chooseLine.splice(a, 1)
			}
			this.chooseID = this.dedupe(this.chooseID);
			this.$store.dispatch('fetch_choose_id',this.chooseID);
		},
		watch:{
			playID: function(){
				const _this = this;
				_this.chooseData = {
					id: _this.poiID,
					playId: _this.playID
				}
			}
		}
	}
</script>
<style src="./poiList.css" scoped></style>
<style scoped>
	.fade-enter-active, .fade-leave-active {
      transition: opacity .01s
    }
    .fade-enter, .fade-leave-active {
      opacity: 0
    }
</style>