const state = {
  dynamic_number: 0,
  contentArr: [],
  my_near:{},
  my_center:[],
  //选择 国家 的 目的地 数据
  destination:[],
  //往城市
  forthCity:{name:'北京',id:'2287'},
  //反城市
  backCity:{name:'北京',id:'2287'},
  //行程日期
  tripDate:{},
  //偏好数据
  prefer:[{
    id:"-1",
    img:"data:image/png;base64,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…88Cy7YOdcVEwtihFkyN1aJLtC1EPwfPWqUxyg0q5FjUuIICPDuhSaIQyhIEF6OO5FgWBJrkG8sWKXK5arV4TLiun8aeUvcvwcMdjhHTy0nKBNq3mRigAQ636RCOTWsx22PZ0OVpKSGnxUkNKro3Gqk4LRSBZdZdUNXyKM2pHDWdcgKfgxqV6/ossELxMxwnodIvkDsNp9Lv5wSXtaTAsRudJmAlyFxB10ROVam8qVyhRmjNbF+aZ9XMSMHjulO7OP4M+uN7FX1hRSx1sh30D8tV4vlhY/BsgFDLD2wlGhV+KQFHfYsWKgM1VoDHzozaYhkiT3AFxZxXblMqjGQntZXSIAtHztNgI/cKgcTWpAETSVmzxYBHX8NanXxVatDuzvAoHqO7yhs+Za0RjPvTz+WCia09k9FJ5VzZZdOhlJZphJ0dSNBJzk8COn+qC5LyIUNGRhg3eVRan+oHmPZSm6VQ6/r4LJUZ6E1dNLRSTVgoW5033VSjvE85BumWykxyIbjspOIusMw8OhVNy7QQKTtQ1CKw2EJMGgKf6DXSAyfDJBnPwMuZfUu7oCiacvtIBF4hB9XOj6KJvJlZlK3E9pzSpF7lFOM+JZWqcCySewKLLlKDgm1OJLR94rZ8cnJqheZApoY0nvIcJroqDuqxivkcBkyaPxl+1NYZprGwkDeNmRYe1zV4zPDjFfBkAFmKAMeARCpUzdMm5sdlfV4KAYHFwu7vKXMvkilqVPZjBpagE1QmZskMBe4np9KuryagzH0TrJSTXmyvW5sKw+1uy08fZyxUa4DFlqEzqyrzs/oJLPrxVxkZnrPVH4FXCyweQ3DVAqviGsPB3XQsUX9bD2o0D4/AIudKmtCP/sB0kYbDEVzRQkqDiaVivcw6wURwEVgF4/4s0dcuimBzgOW7gDK1ZhVxrup0FgM0go//cgaI3Mfwi35GtvwMIOJGmyJ/4j66vsx4yKe4TmBZUNFa5U9AiCsu02rZ1p4FVVs3ZNwBWEcJclRnKFSzPykpDDnH1E2BcTIVeC4BxW5/rQHWZ6E0sTLFLrqTCNS6Qx5KIr9pU6jCc90l8lrXMinLLpEfG4JKLg+PZ0oNh3UrHTIzrjL0E4Hq7ASoc7mBaqry2hUypmhcI3mXFVOj7SEXmwAsjWTdvSnkVE4GGLdZi1TZT2DXsVLEEC1RxSo5x5QzoaBJ7kQ8cZnciXnnLAROyeSFF8mlDMHmqC5a2BwFkh2Q0bYqCafbyxFMXUZ5N66PYDpOeaYM6aAuxZDL0Wq8z7b6uF27v91Vy6a7bLFPvDuWFVdcOd0AS7f8+MGdVJhJ1ornOhaLbtCS7UpIp97MFBZkGlyWvdvYoTufjpmvkKk0OsTDE11di8TxGmCob2J2qb2+G+7hNrYYtXhqrBeVebpGgsyKqASYJfg2rqjDQG3h4BIDBXh0jyyam1lg1YCr+lMKlxxKNWFDhV8ZZJWTIdHW1iYbAsr+pWUiCK10oOjyjIygkgjGjVmiNkVLpO/bYcRMYt8MeJYPQi6lH2QQyBkuNb4UQuukQeWo6Fw/+5oQnPVyqSaNs1Dj/qyFcsHEa00AVAPXZ+ux5cDSvwIbOzR3YQtRpyy7VsukLVv5gYeytytV+bjhW7Vu0QKI4CLnsi+RZAuRhVbLiKl6tQ04mQtBZmOOFmD2XNtirAWWXdfdp6x54ofPhZZI788CGlg2VsjvngUIKO7T6jgBl9H99WQ8AyR0jlTo/viX4RjiS4dgRhg2BpZwGCHzAORTFVAxU4RjhVqX1g90GA41UgyzPXkaLdRGc4xu8DmBZA1CZ5wFrjci6y0FFm9UO0mTreTaOXVc6YHHaF0LgHWJ/QehOM2qbSFyH11iygqpq4HccBUgY+RclrgvBcZNxinPoyRh9S2uD2fhWQtG69VuAtfcFzVg0iDKhfKEdY3Wqtl3KhmX2QhY3F4BEldyIZgMrkBXFzfA0nKBJdYm7YVAKtLNjQG0UDaWlwwgo4aQkzvZLAVaKVoo/TxDAPlUzqQNU+h0rRQPGVkB6XK4U4WgOxICXd+qXFXw1ECypY6UYIVPekFaKU4nOB1Zv9m0Amvr0c1umLCv3vDc9oAtW+pLD9zPSTHthHo21MPtOsO0D2rNmcCQbSka4s39DPnY66dj1WXXemmty6Ta6A9vzrctSAKtYLbpViSBZooLLEv4pwKVBjVTgg2x5nrGcCZrjez55EolY5ES7aElcsG0xHKncDriysctOGByXV6HAdR+AxzNpY4CnabFN7oKwtRh3p84Om9vVZJivz/7XKs2QLZaGZ0EnTE/lntDgv5n90JNF0zWx9fwKLfeKhVcU5mzBpZ+PqNruS3EScDigTV8i/0PSea5ywqoLrCsgKo/LoXUMSiY3om2tegCy+Z0Wf7FfQQWZQo77bh1p9xHazYdqLhfg8qZpYxuzXIlSgRc5lDWLORO9praKpkVLjMQbIwUuExA6d3DOoJfOa/DhwyY8ygXZBwr2HmgCpgKsCygHCt1CZPynDIBWOdXr1EJz9hjm9SqrE5lT1swYDFRizPa02rVthBr+ZZ9OIIrOQRFl8ht2i2aAcDjKowtcrvOl+8CcgSayeXSqc1G8yK553a2HgkoLVE4AHMBZUePm252OysV6OdyrBd5k95Gl2cAkDSur0gx0yCrYIYJ0lkGfBajmHM5b4ROWw8eg9CmHDsGWILeuQJy+HCoSdn9jbQpDaxKsA/oa0afMq2/Ztzf3IFF+cGWm8IQjwPuyr7a7FIewxgi/2cliNqWInfb9BqGGRhr2LvduD92djVxxQrI6IZGwnQbZqAuMTMgZx1XylZkhYuZVqTzyBW36W4rZMcn/eBogRJtHeEH1K230CYl2s02ttro7qzgZPQoHkPJQB9cx+W1GfCRhNtnoIWyeVCc+SFjXJ7db10f17WVcnKmaKTIobiPPMqeo4FkS72QzFSWya2cBu5vWlNvDmjsCmcCrDqhHh2gNh1b+bwu37L58QNHoDSwyFeNteLyoWF4VqHnug1c04rZliO3D5pAtu3DT3Cx9wVzvKxcYa1YbzvEWja3/mqXq3jRWrjebYHENbvfdXf6GOPu+LeNY3maC7ctgTCjNHxJs3EQ0DzqOJBeCrHTiUQ2THRjow45J6gqHs/pjoWdYUbCJGAZHtVI6OTxdXUpc6GbGkzQtqDA4rPYUA+XtWjKhVqrVRXldecLLZ6yOJyLq3SNFFHHh6GWLTODb5mOr7anD4+zGanaNXYBcaN92Up2W5PVeUmrUMpnxlSyvWaCUhdpY1UgafA4nEe7O0uc2DjxIXZuT7o7Akpf6kQoFdjL0krZZSronUaPomDuWijgCEZXramQdIZknqpp8RFULATW+cblceIjloom5bzPPVMk5rmvzeV5A5Z7o7q5WvYARzjVOVssNpZocra4iW6xwrm4wRB6exm6RlovthiHY1U3nGS2BFNQaS1M2o1ediSJSjCbuV3GTbqEv7bSrDWr3V67rsHjlhEgZbIzqYwXLQnnMcNAu1HJ2Rl0KjDZS2ZKEPInu+5aKG6zrq9Wk2Jrr1keNaUmxZtM0eKzzzWllZq0k/1YJnammLKeXXDVZj7UYszt3Kotl+MWtcalY4oTb2flCG7Vehd7Y5hSSb1hKMhxmXoYQWPJuGgtGJdru1a7+7jfNgDcpyBouN2ChwNn0K3Vq5h2Y73SHKllKMzWdItrmcijtLvjM7pgOgx0O4R8zOZJOQHjlWshu3ii4/Im8SiT4mJjfDx8LnG+2vc9dYBVkwExyS0ehKoFluZd5o32DMHTuDLg0oOMsKwAdJzRAReBxaLVe4fMM7ferSAXaGwAVMa+qZmb2l2tBVX7krBrOosFll5xgWX5kzkuTYX8WDUck3EsFOoBy5EQzqMnrUPQ6fbuqxffq/MLcN3fdGJnbYvPXm7BgDWhhVgnjsgH0pmmfxmOkGWt1lZn+fgP4VGdrxTHNdoWI/dVRq+xB7IXIUE0BNXbG7pHtz7tYKhauqjMWQbUAq3ON5i0iUAiR2LhH71uCfiEoweR95dxxmu9Nd3Tq8E0YytlOFQFTHR5tjSQEGozEdy0YZ66y+mSm36sjAAAApJJREFUNekFp4n7zQlYkDAgXdfe16n96fK27Clsjdy0GWLdIrfbThj2GCtHcN1tNXKdFox/7fBI9hwrrHK9Ysm44gBOH9sLsD9jMwCa6hjXxdW6N/e8nMk00NuOAq5l6nZad/XcnQbuWsgGaKen/79qw4Yqj9oK9Dk9ZXiMS86ntEruQ04BpOatUsihpitqpsDiBRuSeYfI87hJvXtsa5E7nRZjBVhccFqOFmBu65HbbI5X7ctZLma306rZZcP/9aoVYutVTp5ZmFb+dg7QLs0tx4Bum7ZitzPVgDyK7u5wuOxyKH3vOkl3lke9xonr8Vjd0mO5F7jP4VG1z92su2vk6ni90w5Ypl7C577XSRA0/tG6yQf2VuODNgvVAstyL5slYSvWtV52m8vH6gFHf1wHcPWOmQQie5DxbRVAGSBpADncifnlda0UD7TEnFaqSCtlLZTT0jNu73xjpTZvhnzWSbz7lQAWX3JCUmA9q2Vzt6YAlu6ub1uMlnsZ62XdIu/l8i9dwUZhHe6DchqSE91kPfQY1zlplyVGdc6Z4O4IHkeTCsdpCYsLqhXrIBpLNanBlke9hoFie6ITMOamPhPbaxWPWliLZV/KcK3KaqOfe016TW3WaSXFhuc7IKvHuewt3O5k3FYJBZn0G3ucTSCsGBDDw+w6h1Gyhaq++wrDzKiYYXGtEE89UtOKs5cjePSyAY9jlPTmlSbjIOROEzWoZt1d06S8SULO52pYIao5HjVVdVavPc/AsjirKPRsLpM3mEJiz0W6xh+YIDbXbW7XBHDVXakSfu52MBYmGs6iaJfm6EzuJSpgshsdNHHRgom719ezSua8CcAy2+qp5i6wtmyBng6kUpoQOeu9/nwC6/8HOS8ppUAdONAAAAAASUVORK5CYII=",
    name:"不限"
  }],
  // 选择的 城市 数据
  cityData:[],
  //选择线路数据
  chooseLine:[],
  // 已选景点 以及 玩法 id
  choose_id:[], 
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
  chooseLine: state => state.chooseLine,
  choose_id: state => state.choose_id,
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
  commit_chooseLine(state, line){
    state.chooseLine = line
  },
  commit_choose_id(state, id){
    state.choose_id = id
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
  fetch_chooseLine({ commit }, line) {
    commit('commit_chooseLine',line)
  },
  fetch_choose_id({ commit }, id) {
    commit('commit_choose_id',id)
  },
}


export default {
  state,
  getters,
  mutations,
  actions
}
