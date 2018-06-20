const state = {
  dynamic_number: 0,
  contentArr: [],
  my_near:{},
  my_center:[],
}

const getters = {
  dynamic_number: state => state.dynamic_number,
  contentArr: state => state.contentArr,
  my_near: state => state.my_near,
  my_center: state => state.my_center
}

const mutations = {
  commit_number (state, number) {
    state.dynamic_number = number
  },
  commit_content_arr (state, list) {
    state.contentArr = list
  },
  commit_my_near (state, n) {
    state.my_near = n
  },
  commit_my_center(state, center){
    state.my_center = center
  }
}

const actions = {
  fetch_number ({ commit }, number) {
    commit('commit_number', number)
  },
  fetch_content_arr ({ commit }, list) {
    commit('commit_content_arr', list)
  },
  fetch_my_near({ commit }, n) {
    commit('commit_my_near', n)
  },
  fetch_my_center({ commit }, center) {
    commit('commit_my_center',center)
  }
}


export default {
  state,
  getters,
  mutations,
  actions
}
