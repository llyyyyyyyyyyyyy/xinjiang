import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Trip from '../components/trip/trip.vue'
import homeCountry from '../components/home/country/country.vue'
import homeProvince from '../components/home/province/province.vue'
import scenic from '../components/home/scenic/scenic.vue'
import sceInfo from '../components/home/scenic/scenicInfo/scenicInfo.vue'
import routerInfo from '../components/home/routerInfo/routerInfo.vue'
import mapList from '../components/mapList/mapList.vue'
import play from '../components/home/play/play.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Home,
      name:'Home'
    },
    {
      path: '/trip',
      component:Trip,
      name:'trip'
    },
    {
      path: '/homeCountry/:groupDetailId',
      component:homeCountry,
      name:'homeCountry',
      props:true
    },
    {
      path: '/homeProvince/:itemId',
      component:homeProvince,
      name:'homeProvince',
      props:true
    },
    {
      path:'/scenic/:groupDetailId/:groupDetailName',
      component:scenic,
      name:'scenic',
      props:true
    },
    {
      path:'/sceInfo/:id',
      component:sceInfo,
      name:'sceInfo',
      props:true

    },
    {
      path:'/routerInfo',
      component:routerInfo,
      name:'routerInfo',
      props:true

    },
    {
      path:'/mapList/:regionIds/:pid',
      component:mapList,
      name:'mapList',
      props:true
    },
    {
      path:'/play',
      component:play,
      name:'play',
      props:true
    }
  ]
})
