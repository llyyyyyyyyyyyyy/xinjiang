import Vue from 'vue'
import App from './App'
import router from './router'


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

//axios
import axios from 'axios'
Vue.prototype.$http = axios

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
Vue.use(Lazyload)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
