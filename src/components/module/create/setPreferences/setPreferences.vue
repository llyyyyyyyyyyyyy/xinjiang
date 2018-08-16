<template>
	<div id="setPreferences">
		<p class="title">
			<span :class="chooseFlag ? 'choose' : ''" @click='chooseFlag=false'>偏好选择</span>
			<span :class="chooseFlag ? '' : 'choose'" @click='chooseFlag=true'>行程安排</span>
		</p>
		<ul>
			<li v-for="(item, index) in lists" :key="index">
				<p class="name">{{item.name}}</p>
				<div class="card" v-for="(count, i) in item.list">
					<img :src="count.image" alt="">
					<span>{{count.name}}</span>
					<p>{{count.des}}</p>
					<input ref="pre" type="radio" @change="preCheck" :name="'checkbox-'+index" :value="count.abbr" :id="'checkbox-'+index+'-'+i"/><label :for="'checkbox-'+index+'-'+i"></label>
				</div>
			</li>
		</ul>
		<div>
			<p class="btn" @click="confirm">确认选择</p>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	export default{
		data(){
			return{
				chooseFlag:false,
				//偏好数据
				myPrefer:[],
				lists:[
					{
						name:'旅行者分类',
						list:[
							{
								id: '-1',
								name: '不限',
								image: this.MD.noLimit,
								des: '没有想法？让小鹿为您提供一些旅行灵感',
								abbr: '不限',
								isSelected: 1, //当前选项是否选中，1是0否
							},
							{
								id: '357',
								name: '亲子',
								image: this.MD.children,
								des: '安心、轻松，带娃之旅的不二选择',
								abbr: '亲子',
								isSelected: 0, //当前选项是否选中，1是0否
							},
							{
								id: '358',
								name: '情侣',
								image: this.MD.couples,
								des: '悠闲、浪漫，适合二人世界的旅程',
								abbr: '情侣',
								isSelected: 0, //当前选项是否选中，1是0否
							},
							{
								id: '359',
								name: '超人',
								image: this.MD.superman,
								des: '上天、入海，走少有人走的路',
								abbr: '超人',
								isSelected: 0, //当前选项是否选中，1是0否
							},
						]
					},
					{
						name:'深度分类',
						list:[
							{
								id: '360',
								name: '首选',
								image: this.MD.preferred,
								des: '打卡目的地热门景点，适合初次到访',
								abbr: '首选',
								isSelected: 0, //当前选项是否选中，1是0否
							},
							{
								id: '361',
								name: '深度',
								image: this.MD.depth,
								des: '目的地的深度体验，解锁小众玩法',
								abbr: '深度',
								isSelected: 0, //当前选项是否选中，1是0否
							}
						]
					},
					{
						name:'个性化分类',
						list:[
							{
								id: '362',
								name: '户外运动',
								image: this.MD.outdoor,
								des: '徒步、潜水…户外爱好者的选择',
								abbr: '户外',
								isSelected: 0, //当前选项是否选中，1是0否
							},
							{
								id: '363',
								name: '历史人文',
								image: this.MD.humanities,
								des: '博物馆、遗址…人文爱好者的选择',
								abbr: '人文',
								isSelected: 0, //当前选项是否选中，1是0否
							},
							{
								id: '364',
								name: '美味至上',
								image: this.MD.food,
								des: '米其林、路边摊…美食爱好者的选择',
								abbr: '美食',
								isSelected: 0, //当前选项是否选中，1是0否
							},
							{
								id: '365',
								name: '小众秘境',
								image: this.MD.shakotan,
								des: '百年古村、迷雾森林…探秘爱好者的选择',
								abbr: '秘境',
								isSelected: 0, //当前选项是否选中，1是0否
							},
							{
								id: '366',
								name: '追光逐影',
								image: this.MD.pictures,
								des: '自然风光、地标建筑…摄影爱好者的选择',
								abbr: '摄影',
								isSelected: 0, //当前选项是否选中，1是0否
							},
							{
								id: '367',
								name: '特色体验',
								image: this.MD.experience,
								des: '狂欢、节日…猎奇爱好者的选择',
								abbr: '体验',
								isSelected: 0, //当前选项是否选中，1是0否
							},
						]
					},
				],
			}
		},
		computed:{
			...mapGetters(['prefer'])
		},
		methods:{
			preCheck(){
				var _this = this;
				_this.myPrefer = []
				for (var i = 0; i < _this.$refs.pre.length; i++) {
					if (_this.$refs.pre[i].checked) {
						let n = parseInt(_this.$refs.pre[i].name.split('-')[1])
						let j = parseInt(_this.$refs.pre[i].id.split('-')[2])
						_this.myPrefer.push({
							name:_this.$refs.pre[i].value,
							img: _this.lists[n].list[j].image,
							id:_this.lists[n].list[j].id,
						})
					}
				}
			},
			confirm(){
				var _this = this;
				if (_this.myPrefer.length == 0) {
					_this.$router.go(-1);
					return
				}
				_this.$store.dispatch('fetch_prefer',_this.myPrefer);
				_this.$router.go(-1);
			}
		},
		created(){
			var _this = this;
			_this.$nextTick(function(){
				_this.$refs.pre[0].checked = true;
				if (typeof _this.prefer[0] === 'string') return
				for (let i = 0; i < _this.$refs.pre.length; i++) {
					for (let j = 0; j < _this.prefer.length; j++) {
						if (_this.$refs.pre[i].value == _this.prefer[j].name) {
							_this.$refs.pre[i].checked = true;
						}
					}
				}
			});
		},

	}
</script>
<style src="./setPreferences.css" scoped></style>