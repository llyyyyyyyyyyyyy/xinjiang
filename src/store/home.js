const state = {
  dynamic_number: 0,
  contentArr: [],
  my_near:{},
  my_center:[],
  //选择 国家 的 目的地 数据
  destination:[],
  //往城市
  forthCity:'北京',
  //反城市
  backCity:'北京',
  //行程日期
  tripDate:{},
  //偏好数据
  prefer:['不限'],
  // 选择的 城市 数据
  cityData:[],
}

const getters = {
  dynamic_number: state => state.dynamic_number,
  contentArr: state => state.contentArr,
  my_near: state => state.my_near,
  my_center: state => state.my_center,
  destination: state => state.destination,
  forthCity: state => state.forthCity,
  backCity: state => state.backCity,
  tripDate: state => state.tripDate,
  prefer: state => state.prefer,
  cityData: state => state.cityData,
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
  },
  commit_destination(state, des){
    state.destination = des
  },
  commit_forthCity(state, Fcity){
    state.forthCity = Fcity
  },
  commit_backCity(state, Bcity){
    state.backCity = Bcity
  },
  commit_tripDate(state, time){
    state.tripDate = time
  },
  commit_prefer(state, pre){
    state.prefer = pre
  },
  commit_cityData(state, city){
    state.cityData = city
  },
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
  },
  fetch_destination({ commit }, des) {
    commit('commit_destination',des)
  },
  fetch_forthCity({ commit }, Fcity) {
    commit('commit_forthCity',Fcity)
  },
  fetch_backCity({ commit }, Bcity) {
    commit('commit_backCity',Bcity)
  },
  fetch_tripDate({ commit }, time) {
    commit('commit_tripDate',time)
  },
  fetch_prefer({ commit }, pre) {
    commit('commit_prefer',pre)
  },
  fetch_cityData({ commit }, city) {
    commit('commit_cityData',city)
  },
}


export default {
  state,
  getters,
  mutations,
  actions
}
