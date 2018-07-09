import Vue from 'vue'
import Router from 'vue-router'
//��ҳ
import Home from '../components/home/home.vue'
//�г���ҳ
import Trip from '../components/trip/trip.vue'
//��·�б�
import LineList from '../components/module/line/lineList/lineList.vue'
//��·����
import DetailsLine from '../components/module/line/detailsLine/detailsLine.vue'
//ѡ�����
import country from '../components/module/create/country/country.vue'
//ѡ��Ŀ�ĵ�
import destination from '../components/module/create/destination/destination.vue'
//������ʽ
import createWay from '../components/module/create/CreateWay/createWay.vue'
//�г�����
import setCreate from '../components/module/create/setCreate/setCreate.vue'
//��������
import backForthCity from '../components/module/create/backForthCity/backForthCity.vue'
//ѡ������
import chooseDate from '../components/module/create/chooseDate/chooseDate.vue'
//ƫ������
import setPreferences from '../components/module/create/setPreferences/setPreferences.vue'
//ѡ����о���
import choosePoi from '../components/module/create/choosePoi/choosePoi.vue'
// ѡ�񾰵�
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
