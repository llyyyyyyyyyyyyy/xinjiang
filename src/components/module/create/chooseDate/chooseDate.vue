<template>
	<div id="choose">

		<div class="title" v-if="!is_multi">
			<div>
				{{dateStart|titleDateFormat}}<small>{{dateStart|titleWeekFormat}}</small>
			</div>
		</div>
		<div class="title" v-if="is_multi && dateSpan">
			<div class="date-start">
				{{dateStart|titleDateFormat}}<small>{{dateStart|titleWeekFormat}}</small>
			</div>
			<div>
				<small class="date-span">{{dateSpan}}</small>
			</div>
			<div class="date-end">
				{{dateEnd|titleDateFormat}}<small>{{dateEnd|titleWeekFormat}}</small>
			</div>
		</div>
		<div class="title" v-if="is_multi && !dateSpan">
			<div>
				<small>请选择</small>
			</div>
		</div>

		<Calendar @daySelect="daySelect" :multi="is_multi" :selected="start" :start="start" :stop="stop"/>

    <!-- <p class="nextBtn" :class="{ disabled: !dateStart || (is_multi && !dateEnd) }" @click="poiListClik">
			{{nextStep}}
		</p> -->
	</div>
</template>
<script>
	import Calendar from './components/Calendar'
	let weeks = ['日', '一', '二', '三', '四', '五', '六'];
	export default{
		data(){
			return{
				chooseT:'',
				dateStart: null,
				dateEnd: null
			}
		},
		computed: {
			title () {
				return this.is_multi ? '设置出发日期和返回日期' : '设置出发日期'
			},
			is_multi () {
				return this.$route.params.type === 'multi'
			},
			nextStep () {
				return this.is_multi ? '下一步：生成行程': '下一步'
			},
			start () {
				if(this.is_multi){
					return this.dateStart
				}else{
					return new Date(new Date(this.dateStart).toDateString()).getTime()
				}
			},
			stop () {
				if(this.is_multi){
					return this.dateEnd
				}else{
					return new Date(new Date(this.dateEnd).toDateString()).getTime()
				}
			},
			dateSpan () {
				if(!this.dateStart || !this.dateEnd) return false
				let _start = new Date(new Date(this.dateStart).toDateString()).getTime();
				let _end = new Date(new Date(this.dateEnd).toDateString()).getTime();
				return ((_end - _start) / 1000 / 60 / 60 / 24 + 1) + '天'
			}
		},
		filters: {
			titleDateFormat (date) {
				if(!date) return ''
				let _arr = date.split('-');
				return _arr[1] + '月' + _arr[2] + '日'
			},
			titleWeekFormat (date) {
				if(!date) return ''
				let _date = new Date(date.split('-').join('/'));
				let _week = _date.getDay();
				return '周'  + weeks[_week]
			}
		},
		methods:{
			titleWeekFormat_y (date) {

				if(!date) return ''
				let _date = new Date(date.split('-').join('/'));
				let _week = _date.getDay();
				return '周'  + weeks[_week]
			},
			daySelect (dateStart, dateEnd) {
				var _this = this
				_this.dateStart = dateStart.date;
				let date = {
					time: (dateStart.month > 10 ? dateStart.month : '0' + dateStart.month) + '月' + dateStart.day,
					week: _this.titleWeekFormat_y(_this.dateStart),
					ds: dateStart.date
				}
				_this.$store.dispatch('fetch_tripDate',date)
				_this.$router.go(-1)
			},
	      	poiListClik:function(){
				
	      	}
		},
		components:{
		    Calendar:Calendar
	    },
		mounted:function(){
			// this.chooseT = Boolean(localStorage.getItem('chooseData'));
		},
		created () {
			// 用户返回到日期选择时读取上一次选择
			// 当前多选
			if(this.is_multi){
				if(sessionStorage.getItem('createTripDateStart')){
					this.dateStart = sessionStorage.getItem('createTripDateStart');
				}
				if(sessionStorage.getItem('createTripDateEnd')){
					this.dateEnd = sessionStorage.getItem('createTripDateEnd');
				}
			}else{
				// this.dateStart = new Date(new Date().getTime() + 24 * 60 * 60 * 1000).format()
				var now = new Date();
		        var year = now.getFullYear();       //年
		        var month = now.getMonth() + 1 > 10 ? now.getMonth() + 1 : '0' + (now.getMonth() + 1);     //月
		        var day = now.getDate() > 10 ? now.getDate() : '0' + now.getDate();            //日
		        this.dateStart = this.$route.params.type
			}

		}
	}
</script>
<style>
	@import "./chooseDate.css";
	#choose{
		padding-top: 0.56rem;
	}
	#choose .nextBtn{
		transition: all ease 0.35s;
		background-image: linear-gradient(90deg, rgb(39, 196, 254) 0%, rgb(73, 151, 255) 100%);
	}
	#choose .nextBtn.disabled{
		background: #eee;
	}
	#choose .title{
		height: 0.56rem;
		display: table;
		padding: 0 0.22rem;
	}
	#choose .title:after{
	  display: block;
	  content: '';
	  height: 1px;
	  width: 100%;
	  position: absolute;
	  bottom: 0;
	  left: 0;
	  background: #ebebeb;
	  transform: scaleY(0.5) translateY(0.5px);
	}
	#choose .title > div{
		display: table-cell;
		vertical-align: middle;
		color: rgb(51,51,51);
		font-size: 0.19rem;
	}
	#choose .title small{
		font-size: 0.13rem;
		color: rgb(153, 153, 153);
		padding-left: 0.05rem;
	}
	#choose .title .date-span{
		color: rgb(51,51,51);
	}
	#choose .title .date-start{
		text-align: left;
	}
	#choose .title .date-end{
		text-align: right;
	}
</style>
