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
    index: null,
  },
  getters: {
    // [questionnaireTypes.GETTER_QUESTION]: state => state.questionnaires,
    GET_QUESTIONNAIRE: state => state.questionnaires,
    GET_INDEX: state => state.index,
  },
  actions: {
    async ACTION_GET_QUESTIONNAIRE({ commit }) {
      const response = await api.get('/questionnaire')
      // console.log(response)
      commit('SET_QUESTIONNAIRE', response.data.data)
      return response
    },
    async ACTION_ADD_QUESTIONNAIRE({ commit, dispatch }, questionnaire) {
      const response = await api.post('/questionnaire/create', questionnaire)
      // console.log(response.data.data)
      dispatch('ACTION_GET_QUESTIONNAIRE')
      commit('SET_QUESTIONNAIRE', response.data.data)
      return response
    },
    async ACTION_DELETE_QUESTIONNAIRE({ dispatch }, id) {
      const response = await api.delete(`/questionnaire/delete/${id}`)
      console.log(response)
      await dispatch('ACTION_GET_QUESTIONNAIRE')
      return response
    },
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
