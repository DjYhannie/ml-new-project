import api from '../../libs/axios'
import * as questionnaireTypes from '../types/questionnaire'

export default {
  state: {
    namespaced: true,
    questionnaires: [{
      title: '',
      course: '',
      time_duration: '',
      passing_score: '',
      easy: '',
      intermediate: '',
      hard: '',
    }],
    createquestion: '',
    show: true,
  },
  getters: {
    [questionnaireTypes.GETTER_QUESTION]: state => state.questionnaires,
    getQuestions(state) {
      return state.questionnaires
    },
  },
  actions: {
    async [questionnaireTypes.ACTION_SET_QUESTIONS]({ commit }) {
      api
        .get('http://127.0.0.1:8000/api/questionnaire')
        .then(response => {
          commit(questionnaireTypes.MUTATION_SET_QUESTIONS, response.data)
        })
    },
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
    [questionnaireTypes.MUTATION_ADD_QUESTION]: (state, questionnaires) => {
      state.questionnaires.unshift(questionnaires)
    },
    [questionnaireTypes.MUTATION_SET_QUESTIONS]: (state, questionnaires) => {
      state.questionnaires = questionnaires
    },
  },
}
