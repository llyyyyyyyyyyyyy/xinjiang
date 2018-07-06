// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Stort from './store/store'
import qs from 'qs'
import lazy from 'vue-lazyload'
import Vuex from 'vuex'
import store from './store/store.js'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'



//swiper
import Swiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.min.css'

//地图
import AMap from 'vue-amap'

//样式reset
import './stylesheets/_reset.scss'

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
Vue.use(Swiper)
Vue.use(AMap)
Vue.use(lazy)
Vue.use(Vuex)
Vue.use(Mint)


window.tool = {};
window.tool.token = function(){
	return '2a319a52b3e2fed247f74b9bff2c9a02'
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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App ,Stort},
  template: '<App/>'
})
