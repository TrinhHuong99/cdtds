// import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'
import axiosIns from '../libs/axios.js'
// import state from './state'
// import getters from './getters'
// import mutations from './mutations'
// import actions from './actions'

Vue.use(Vuex)

// import modulCampaign from './campaign/moduleCampaign.js'
// import moduleAuth from './auth/moduleAuth.js'


export default new Vuex.Store({
    state: { //khai báo biến
        page: 1,
        checkteam: null,
        tracking_id: localStorage.getItem('_cdtds_track') || null,
        part: 0,
        questions: null,
        contactInfo: {
            id_contact: '',
            email: '',
            name: '',
            age: '',
            phone: '',
            address: '',
            sex: '',
            emailfriend: '',
            namefriend: '',
            agefriend: '',
            phonefriend: '',
            addressfriend: '',
            sexfriend: '',
        },
        score: 0,
        doing: false,
        countDownInterval: null,
        autoPustInterval: null,
        time_remaining: null,
        chosen:  false,
        nextPartState: -1,
        checkValid: '',
        text_err1: 'Bạn vui lòng nhập câu trả lời.',
        setValid: 0
    },
    getters: {
        getTextErr(state){
            return state.text_err
        },
        getValid(state){
            return state.setValid
        },
        getSore(state){
            return state.score
        },
        getContactInfo(state){
            if (state.contactInfo) {
                return state.contactInfo
            }
            return []
        },
        getQuestionPart(state) {
            if (state.questions) {
                return state.questions.part[state.part]
            }
            return []
        },
        getExamPart(state) {
            if (state.questions) {
                return state.questions.part
            }
            return []
        },
        getPartTitle(state) {
            if (state.questions) {
                return state.questions.part[state.part].name
            }
            return ''
        },
        getPartNumber(state) {
            return state.part
        },
        countPart(state) {
            return state.questions.part.length
        }
    },
    mutations: { // thực hiện commit của action
        SET_DOING(state, payload) {
            state.doing = payload
        },
        SET_SCRORE(state, payload){
            state.score = payload
        },
        SET_COUNTDOWN(state, payload) {
            state.countDownInterval = payload
        },
        SET_AUTO_PUSH(state, payload) {
            state.autoPustInterval = payload
        },
        SET_CONTACT_INFO(state, payload) {
            state.contactInfo = Object.assign(state.contactInfo, payload)
            localStorage.setItem("userInfo", JSON.stringify(state.contactInfo))
        },
        SET_TIME_REMAINING(state, payload) {
            state.questions.time_remaining = payload
            localStorage.setItem('cdtdsData', JSON.stringify(state.questions))
        },

        SET_PAGE(state, payload) {
            state.page = payload;
            localStorage.setItem('cdtdsPage', payload)
        },
        SET_STATUS_MODAL(state, payload) {
            state.checkteam = payload;
            // Next page save test data
        },
        SET_PART(state, payload) {
            state.part = payload
        },
        SET_TRACKING_ID(state, payload) {
            state.tracking_id = payload
        },
        SET_QUESTIONS(state, payload) {
            state.questions = payload
        },
        SET_ANSWER(state, payload) {
            const questionIndex = state.questions.part[state.part].questions.findIndex(qs => {
                return qs.id === payload.id
            })
            if(payload.write){
                state.questions.part[state.part].questions[questionIndex].answers = payload.value;
            }else{
                for (let index = 0; index < payload.value.length; index++) {
                    state.questions.part[state.part].questions[questionIndex].answers[index] = payload.value[index];
                }

                const chenhlech = state.questions.part[state.part].questions[questionIndex].answers.length - payload.value.length
                if (chenhlech > 0) {
                    state.questions.part[state.part].questions[questionIndex].answers.splice(payload.value.length, chenhlech)
                }
            }

            //write here

            // state.questions.part[state.part].questions[questionIndex].answers = payload.value

            // localStorage.setItem('cdtdsData', JSON.stringify(state.questions))
        },
        SET_NEXT_PART_STATE(state, payload) {
            state.nextPartState = payload
        },
        SET_CHECKVAL(state, payload){
            state.questions.part[state.part].questions[payload.id].checkvalid = payload.value;
        },
        SET_VALID(state, payload){
            state.setValid = payload
        }
    },
    actions: { // tạo 1 action
        setQuestionAnwswer({ commit, dispatch }, value) {
            commit('SET_ANSWER', value)
            dispatch('countAnswerOfPart')
        },
        countAnswerOfPart ({commit, state}) {
            let qsAnswed = 0;
            let idOfQuestion = -1;
            if (state.questions && state.questions.part[state.part]) {
                for (let index = 0; index < state.questions.part[state.part].questions.length; index++) {
                    const element = state.questions.part[state.part].questions[index]
                    let checkState = false
                    if (element.content_type == 1) {
                        if (element.answers && element.answers.length > 0) {
                            qsAnswed++;
                            checkState = true
                        }
                    }

                    if (element.content_type == 4 && typeof element.answers == 'string') {
                        // console.log(element.id, element.answers)
                        if(element.answers.trim().length < element.length_min ){
                            commit('SET_CHECKVAL', {
                                id: index,
                                value: false
                            })
                        }else{
                            commit('SET_CHECKVAL', {
                                id: index,
                                value: true
                            })
                            qsAnswed++;
                            checkState = true
                        }
                    }

                    if (!checkState && idOfQuestion == -1) {
                        idOfQuestion = state.questions.part[state.part].questions[index].id
                    }

                }
            }
            if (state.part == 0 && qsAnswed == 20) {
                return commit('SET_NEXT_PART_STATE', -1)
            }
            if (state.part == 1 && qsAnswed == 3) {
                return commit('SET_NEXT_PART_STATE', -1)
            }

            return commit('SET_NEXT_PART_STATE', idOfQuestion)
        },
        Tracking_init({
            commit
        }) {
            let trackid = localStorage.getItem('_cdtds_track');
            if (!trackid) {
                axiosIns.get('/track/init', )
                    .then(res => {
                        if (res.data.code === 1) {
                            localStorage.setItem('_cdtds_track', res.data.data)
                            commit('SET_TRACKING_ID', res.data.data)
                        }
                    })
            } else {
                commit('SET_TRACKING_ID', trackid)
            }
        },
        async Questions({state}) {
            return axiosIns.get('/get-questions', {
                params: {
                    tracking_id: state.tracking_id
                }
            })
        },

    },
    modules: {
        // auth: moduleAuth,
        // campaign: modulCampaign
    },
    strict: process.env.NODE_ENV !== 'production'
})