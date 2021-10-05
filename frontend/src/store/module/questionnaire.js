// import { axios } from 'vue/types/umd'
import api from '../../libs/axios'
import * as questionnaireTypes from '../types/questionnaire'
// import { ACTION_ADD_QUESTION } from '../types/questions'

export default {
  state: {
    namespaced: true,
    // questionnaires: [{
    //   title: '',
    //   course: '',
    //   time_duration: '',
    //   passing_score: '',
    //   easy: '',
    //   intermediate: '',
    //   hard: '',
    // }],
    questionnaires: {},
    createquestion: '',
    show: true,
  },
  getters: {
    // [questionnaireTypes.GETTER_QUESTION]: state => state.questionnaires,
    GET_QUESTIONNAIRE: state => state.questionnaires,
  },
  actions: {
    async ACTION_GET_QUESTIONNAIRE({ commit }) {
      const response = await api.get('/questionnaire')
      console.log(response)
      commit('SET_QUESTIONNAIRE')
      return response
    },
    async ACTION_ADD_QUESTIONNAIRE({ commit }, questionnaire) {
      const response = await api.post('/questionnaire/create', questionnaire)
      console.log(response)
      commit('SET_QUESTIONNAIRE', response)
      return response
    },
    // async [questionnaireTypes.ACTION_ADD_QUESTIONNAIRE]({ commit }, questionnaire) {
    //   const response = await api.post('/questionnaire/create', questionnaire)
    //   console.log(response)
    //   commit(questionnaireTypes.MUTATION_ADD_QUESTIONNAIRE, response.data)
    //   return response
    // },
    // async [questionTypes.ACTION_ADD_QUESTION]({ commit }, data) {
    //   api
    //     .put('http://127.0.0.1:8000/api/questions/add')
    //     .then(response => {
    //       commit(questionTypes.MUTATION_ADD_QUESTION, response.data)
    //     })
    // },
  },
  mutations: {
    // ADD_QUESTION(state, createquestion) {
    //   state.questions.unshift(createquestion)
    // },
    SET_QUESTIONNAIRE(state, questionnaires) {
      state.questionnaires = questionnaires
    },
    [questionnaireTypes.MUTATION_ADD_QUESTION]: (state, questionnaires) => {
      state.questionnaires.unshift(questionnaires)
    },
    // [questionnaireTypes.MUTATION_SET_QUESTIONNAIRE]: (state, questionnaires) => {
    //   state.questionnaires = questionnaires
    // },
    [questionnaireTypes.MUTATION_ADD_QUESTIONNAIRE]: (state, questionnaire) => {
      state.questionnaires = questionnaire
    },
  },
}
