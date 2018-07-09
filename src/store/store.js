import vuex from 'vuex'
import vue from 'vue'
import actions from './action'
import mutations from './mutation'
import home from './home'
vue.use(vuex);
export default new vuex.Store({
  state:{
    amsg: '',
    bmsg: '',
    cmsg: '',
    dmsg: '',
    emsg: '',
    fmsg: '',
    gmsg: '',
    hmsg: '',
    imsg: '',
    jmsg: '',
    kmsg: '',
  },
  actions,
  mutations,
  getters:{
    amsg(state){
      return state.amsg
    },
    bmsg(state){
      return state.bmsg
    },
    cmsg(state){
      return state.cmsg
    },
    dmsg(state){
      return state.dmsg
    },
    emsg(state){
      return state.emsg
    },
    fmsg(state){
      return state.fmsg
    },
    gmsg(state){
      return state.gmsg
    },
    hmsg(state){
      return state.hmsg
    },
    imsg(state){
      return state.imsg
    },
    jmsg(state){
      return state.jmsg
    },
    kmsg(state){
      return state.kmsg
    }
  },
  modules: {
    home
  }
})
