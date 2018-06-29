import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Trip from '../components/trip/trip.vue'
import country from '../components/home/country/country.vue'
import province from '../components/home/province/province.vue'
import scenic from '../components/home/scenic/scenic.vue'
import sceInfo from '../components/home/scenic/scenicInfo/scenicInfo.vue'
import routerInfo from '../components/home/routerInfo/routerInfo.vue'

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
      path: '/country/:groupDetailId',
      component:country,
      name:'country',
      props:true
    },
    {
      path: '/province/:itemId',
      component:province,
      name:'province',
      props:true
    },
    {
      path:'/scenic/:groupDetailId/:groupDetailName',
      component:scenic,
      name:'scenic',
      props:true
    },
    {
      path:'/sceInfo',
      component:sceInfo,
      name:'sceInfo',
      props:true

    },
    {
      path:'/routerInfo',
      component:routerInfo,
      name:'routerInfo',
      props:true

    }
  ]
})
