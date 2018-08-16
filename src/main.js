import Vue from 'vue'
import App from './App'
import router from './router'
import qs from 'qs'
import lazy from 'vue-lazyload'
import Vuex from 'vuex'
import store from './store/store.js'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'


//mint ui
import { Lazyload } from 'mint-ui'


//swiper
import VueSwiper from 'vue-awesome-swiper'//不需要初始化的
import 'swiper/dist/css/swiper.min.css'


//地图
import AMap from 'vue-amap'

//样式
import './stylesheets/main.scss'

//rem适配
import rem from './assets/rem'

//地图icon
import MD from './assets/modulData.js'

//接口api
window.api = 'http://xunlu.dev.mydeertrip.com'
//appKey
window.appKey = 'xunlu'
//大区id
window.regionIds = 182

//axios
import axios from 'axios'

Vue.prototype.MD = MD;

Vue.prototype.$http = axios.create({
	baseURL: window.api,
	// timeout: 20000,
	responseType: 'json',
	withCredentials: false,
	transformRequest(data, headers) {
		return qs.stringify(data);
	}
});

// 初始化vue-amap
AMap.initAMapApiLoader({
  // 申请的高德key
	key: 'c9ba0f5b93a529802a4ed94665a1b545',
  // 插件集合
	plugin: ['AMap.Driving','AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor'],
});

Vue.use(rem)
Vue.use(VueSwiper)
Vue.use(AMap)
Vue.use(lazy)
Vue.use(Vuex)
Vue.use(Mint)
Vue.use(Lazyload)


window.tool = {};
window.tool.token = function(){
	return 'feeb131c76eb463f11e841b0e1350b7e'
}

Date.prototype.format = function(seperator) {
	var _seperator = seperator || "-";
	var month = this.getMonth() + 1;
	var day = this.getDate();
	if (month <= 9) {
		month = "0" + month;
	}
	if (day <= 9) {
		day = "0" + day;
	}
	return this.getFullYear() + _seperator + month + _seperator + day;
}

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
