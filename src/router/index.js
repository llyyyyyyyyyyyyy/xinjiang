import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/home.vue'
import Trip from '../components/trip/trip.vue'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:Home,

    },
    {
      path: '/trip',
      component:Trip,
      name:'trip'
    },
  ]
})
