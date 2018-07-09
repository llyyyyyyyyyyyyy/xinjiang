import Vue from 'vue'
import Router from 'vue-router'
//首页
import Home from '../components/home/home.vue'
//行程首页
import Trip from '../components/trip/trip.vue'
//线路列表
import LineList from '../components/module/line/lineList/lineList.vue'
//线路详情
import DetailsLine from '../components/module/line/detailsLine/detailsLine.vue'
//选择国家
import country from '../components/module/create/country/country.vue'
//选择目的地
import destination from '../components/module/create/destination/destination.vue'
//创建方式
import createWay from '../components/module/create/CreateWay/createWay.vue'
//行程设置
import setCreate from '../components/module/create/setCreate/setCreate.vue'
//往返城市
import backForthCity from '../components/module/create/backForthCity/backForthCity.vue'
//选择日期
import chooseDate from '../components/module/create/chooseDate/chooseDate.vue'
//偏好设置
import setPreferences from '../components/module/create/setPreferences/setPreferences.vue'
//选择城市景点
import choosePoi from '../components/module/create/choosePoi/choosePoi.vue'
// 选择景点
import poiList from '../components/module/poiList/poiList.vue'
//
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
      path: '/lineList',
      component:LineList,
      name:'lineList'
    },
    {
      path: '/detailsLine/:id',
      component:DetailsLine,
      name:'detailsLine'
    },
    {
      path: '/country',
      component:country,
      name:'country'
    },
    {
      path: '/destination',
      component:destination,
      name:'destination'
    },
    {
      path: '/createWay',
      component:createWay,
      name:'createWay'
    },
    {
      path: '/setCreate',
      component:setCreate,
      name:'setCreate'
    },
    {
      path: '/backForthCity/:type',
      component:backForthCity,
      name:'backForthCity'
    },
    {
      path: '/chooseDate/:type',
      component:chooseDate,
      name:'chooseDate'
    },
    {
      path: '/setPreferences',
      component:setPreferences,
      name:'setPreferences'
    },
    {
      path: '/choosePoi',
      component:choosePoi,
      name:'choosePoi'
    },
    {
      path: '/poiList/:id',
      component:poiList,
      name:'poiList'
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
