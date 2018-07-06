<template>
	<div id="destination">
		<h3>选择目的地</h3>
		<div class="r-slide-menu">
			<span class="city" v-show="false">{{cityName}}</span>
			<div class="r-slide-menu-wrap" :class="transitionClass" :style="wrapStyle">
				<ul>
					<li v-for="(menu, index) in destination"
					:class="index==num?'select':''"
					@click="getData(index)">
						<p>{{menu.name}}</p>
						<p>{{menu.regions.length}}个目的地</p>
					</li>
				</ul>
			</div>
			<div class="r-slide-menu-content" :class="transitionClass" :style="contentStyle"
			@touchstart="touchstart"
			@touchmove="touchmove"
			@touchend="touchend"
			@click="switch_">
				<div class="des"
				v-for="(list, index) in regions"
				:style="{backgroundImage: 'url(' + list.img + '-GDcreateroute3.ht)' }">
					<div>
						<p class="name">{{list.name}}</p>
						<p class="introduce">{{list.cityStr}}</p>
					</div>
					<input type="checkbox" :id="'checkbox-0-'+index" v-model="regionsArr" :value="list"/><label :for="'checkbox-0-'+index"></label>
				</div>
			</div>
		</div>
		<div class="footer">
			<swiper :options="{ slidesPerView: 'auto' }">
	            <swiper-slide class="selected-city-item" v-for="(item, index) in regionsArr" :key="index" style="width: auto;">
	              {{item.name}} 
	              <i class="btn-close" @click="choose(item)"><img src="../../../../assets/images/delta.png" alt=""></i>
	            </swiper-slide>
	        </swiper>
			<span :class="nextBtn ? 'next' : ''" @click='next'>下一步</span>
		</div>
	</div>
</template>
<script>
	import { mapGetters } from 'vuex'
	import { mapActions } from 'vuex'
	import $ from 'jquery'
	export default {
		props: {
			width: {
				type: String,
				default: '140'
			},
			ratio: {
				type: Number,
				default: 2
			}
		},
		data () {
			return {
				nextBtn:false,
				//选择城市名称
				cityName:'',
				// 菜单点击 index
				num:0,
				//目的地数据
				regions:[],
				//选中 目的地 数据
				regionsArr:[],
				isMoving: false,
				transitionClass: '',
				startPoint: {
					X: 0,
					y: 0
				},
				oldPoint: {
					x: 0,
					y: 0
				},
				move: {
					x: 140,
					y: 0
				},
			}
		},
		computed: {
			...mapGetters(['destination']),
			wrapStyle () {
				let style = {
					width: `${this.width}px`,
					left: `-${this.width / this.ratio}px`,
					transform: `translate3d(${this.move.x / this.ratio}px, 0px, 0px)`
				}
				return style
			},
			contentStyle () {
				let style = {
					transform: `translate3d(${this.move.x}px, 0px, 0px)`
				}
				return style
			}
		},
		methods: {
			//下一步 btn
			next(){
				if (!this.nextBtn) return
				this.$store.dispatch('fetch_cityData',this.regionsArr);
				this.$router.push({path: '/setCreate'})
			},
			//底栏 删除
			choose(item){
				for(let i = 0; i < this.regionsArr.length; i++){
					if (this.regionsArr[i] == item) {
						this.regionsArr.splice(i,1)
					}
				}
			},
			touchstart (e) {
				this.oldPoint.x = e.touches[0].pageX
				this.oldPoint.y = e.touches[0].pageY
				this.startPoint.x = this.move.x
				this.startPoint.y = this.move.y
				this.setTransition()
			},
			touchmove (e) {
				let newPoint = {
					x: e.touches[0].pageX,
					y: e.touches[0].pageY
				}
				let moveX = newPoint.x - this.oldPoint.x
				let moveY = newPoint.y - this.oldPoint.y
				if (Math.abs(moveX) < Math.abs(moveY)) return false
				e.preventDefault()
				this.isMoving = true
				moveX = this.startPoint.x * 1 + moveX * 1
				moveY = this.startPoint.y * 1 + moveY * 1
				if (moveX >= this.width) {
					this.move.x = this.width
				} else if (moveX <= 0) {
					this.move.x = 0
				} else {
					this.move.x = moveX
				}
			},
			touchend (e) {
				this.setTransition(true)
				this.isMoving = false
				this.move.x = (this.move.x > this.width / this.ratio) ? this.width : 0
				this.cityShow()
			},
			//城市浮标 显示隐藏
			cityShow(){
				if (this.move.x != 0) {
					$('.city').fadeOut();
				}else {
					$('.city').fadeIn()
				}
			},
		// 点击切换
			switch_ () {
				this.setTransition(true)
				this.move.x =  0
				this.cityShow()
			},
			setTransition (isTransition = false) {
				this.transitionClass = isTransition ? 'r-slide-menu-transition' : ''
			},
			getData(num){
				this.num = num
				this.regions = this.destination[num].regions;
				this.cityName = this.destination[num].name
			}
		},
		created(){
			this.getData(0)
		},
		watch:{
			'regionsArr':function(){
				this.nextBtn = (this.regionsArr.length > 0) ? true : false;
			}
		}
	}
</script>
<style lang="scss">
	@mixin one-screen {
		position: absolute;
		left:0;
		top:0;
		width:100%;
		height:100%;
		overflow: hidden;
	}
	.r-slide-menu{
		@include one-screen;
		&-wrap, &-content{
			@include one-screen;
		}
		&-transition{
			-webkit-transition: transform .3s;
			transition: transform .3s;
		}
	}
</style>

<style src="./destination.css" scoped></style>
