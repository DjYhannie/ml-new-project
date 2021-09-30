import api from '../../libs/axios'
import * as questionTypes from '../types/questions'

export default {
  state: {
    namespaced: true,
    questions: {},
    show: true,
  },
  getters: {
    // [questionTypes.GETTER_QUESTION]: state => state.questions,
    GET_QUESTION(state) {
      return state.questions
    },
  },
  actions: {
    // async ACTION_SET_QUESTIONS({ commit }) {
    //   const res = await api.get('/questions')
    //   console.log('GET_QUESTION', res.data)
    //   commit('SET_QUESTION', res.data)
    // },
    ACTION_SET_QUESTIONS({ commit }) {
      api.get('/questions')
        .then(res => res.json()).then(b => {
          const questions = b.data.map(question => {
            const json = JSON.parse(question.choices)
            return json
          })
          console.log(questions)
          commit('SET_QUESTION', questions)
        })
    },
    async ACTION_ADD_QUESTION({ commit }, addQuestion) {
      const response = await api.post('/questions/add', addQuestion)
      console.log('ADD QUESTION', response.data.questions)
      commit('SET_QUESTION', response.data.questions)
      return response
    },
    async [questionTypes.ACTION_DELETE_QUESTION]({ commit }, id) {
      await api.delete(`/delete/${id}`)
      commit(questionTypes.MUTATION_DELETE_QUESTION, id)
    },

  },
  mutations: {
    SET_QUESTION(state, questions) {
      state.questions = questions
    },
    [questionTypes.MUTATION_SET_QUESTIONS]: (state, questions) => {
      state.questions = questions
    },
    [questionTypes.MUTATION_ADD_QUESTION]: (state, question) => {
      state.questions = question
    },
    // [questionTypes.MUTATION_DELETE_QUESTION](state,  id) {
    //   state.questionses = state.questions.filter
    // }
  },
}
