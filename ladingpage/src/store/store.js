// import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
// import axiosIns from '../libs/axios.js'
// import state from './state'
// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'

Vue.use(Vuex)

// import modulCampaign from './campaign/moduleCampaign.js'
// import moduleAuth from './auth/moduleAuth.js'


export default new Vuex.Store({
  state: { //khai báo biến
    // page: 1,
    // tracking_id: localStorage.getItem('_speakup_track') || null,
    // questions: null,
    // part: 0
  },
  getters: {
    // getQuestionPart(state) {
    //   if (state.questions) {
    //     return state.questions.part[state.part]
    //   }
    //   return []
    // },
    // getExamPart(state) {
    //   if (state.questions) {
    //     return state.questions.part
    //   }
    //   return []
    // },
    // getPartTitle(state) {
    //   if (state.questions) {
    //     return state.questions.part[state.part].name
    //   }
    //   return ''
    // },
    // getWritingOfPart(state) {
    //   if (state.questions) {
    //     return state.questions.part[state.part].writing || ''
    //   }
    //   return ''
    // },
    // getPartNumber(state) {
    //   return state.part
    // },
    // countPart(state) {
    //   return state.questions.part.length
    // }
  },
  mutations: { // thực hiện commit của action
    // SET_TIME_REMAINING(state, payload) {
    //   state.questions.part[state.part].time_remaining = payload
    //   localStorage.setItem('speakupTestData', JSON.stringify(state.questions))
    // },
    // SET_WRITING(state, payload) {
    //   state.questions.part[state.part].writing = payload
    //   localStorage.setItem('speakupTestData', JSON.stringify(state.questions))
    // },
    // SET_PAGE(state, payload) {
    //   state.page = payload;
    //   // Next page save test data
    //   // localStorage.setItem('speakupTestData', JSON.stringify(state.questions))
    // },
    // SET_PART(state, payload) {
    //   state.part = payload
    // },
    // SET_TRACKING_ID (state, payload){
    //   state.tracking_id = payload
    // },
    // SET_QUESTIONS(state, payload){
    //   state.questions = payload
    // },
    // SET_ANSWER(state, payload) {
    //   const questionIndex = state.questions.part[state.part].questions.findIndex(qs => {return qs.id === payload.id})
    //   state.questions.part[state.part].questions[questionIndex].answers[0] = payload.value

    //   localStorage.setItem('speakupTestData', JSON.stringify(state.questions))
    // },
  },
  actions: { // tạo 1 action
    // Tracking_init({ commit }){
    //     let trackid = localStorage.getItem('_speakup_track');
    //     if (!trackid) {
    //         axiosIns.get('/track/init', )
    //         .then( res => {
    //             if (res.data.code === 1) {
    //                localStorage.setItem('_speakup_track', res.data.data)
    //                commit('SET_TRACKING_ID', res.data.data)
    //             }
    //         })
    //     } else {
    //       commit('SET_TRACKING_ID', trackid)
    //     }
    // },
    // Questions({commit, state}){
    //     axiosIns.get('/get-questions', {
    //         params: {
    //             tracking_id :  state.tracking_id
    //         }
    //     })
    //     .then(res => {
    //        if(res.data.code == 1){
    //            commit('SET_QUESTIONS', res.data.data)
    //        }
    //     })
    // }
  },
  modules: {
    // auth: moduleAuth,
    // campaign: modulCampaign
  },
  strict: process.env.NODE_ENV !== 'production'
})
