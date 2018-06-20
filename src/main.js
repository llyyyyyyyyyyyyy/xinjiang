// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Stort from './store/store'

//swiper
import Swiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.min.css'

//地图
import AMap from 'vue-amap'

//样式reset
import './stylesheets/_reset.scss'

//rem适配
import rem from './assets/rem'

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

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App ,Stort},
  template: '<App/>'
})
