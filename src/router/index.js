import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Trip from '../components/trip/trip.vue'
import country from '../components/home/country/country.vue'
import province from '../components/home/province/province.vue'
import scenic from '../components/home/scenic/scenic.vue'


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
    // {
    //   path:'/add',
    //   component:add,
    //   name:'add'
    // },
    // {
    //   path:'/found',
    //   component:found,
    //   name:'found'
    // },
    // {
    //   path:'/mine',
    //   component:mine,
    //   name:'mine'
    // }
      {
        path: '/country/:groupDetailId',
        component:country,
        name:'country',
        props:true
      },
      {
        path: '/province',
        component:province,
        name:'province',
        props:true
      },
      {
        path:'/scenic',
        component:scenic,
        name:'scenic',
        props:true
      }
  ]
})
