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
    async ACTION_SET_QUESTIONS({ commit }) {
      await api.get('/questions')
        .then(res => {
          console.log(res)
          let questions = res.data.data.map(question => {
            questions = JSON.parse(question.choices)
            console.log(questions)
            return questions
          })
          commit('SET_QUESTION', questions)
          console.log(questions)
        })
    },
    async [questionTypes.ACTION_ADD_QUESTION]({ commit }, question) {
      const res = await api.post('/questions/add', { question })
      console.log('SUCCESSFUL', res)
      commit(questionTypes.MUTATION_ADD_QUESTION, res.data, question)
    // async ACTION_ADD_QUESTION({ commit }, addQuestion) {
    //   const response = await api.post('/questions/add', addQuestion)
    //   console.log('ADD QUESTION', response.data.questions)
    //   commit('SET_QUESTION', response.data.questions)
    //   return response
    // },
    // async [questionTypes.ACTION_DELETE_QUESTION]({ commit }, id) {
    //   await api.delete(`/delete/${id}`)
    //   commit(questionTypes.MUTATION_DELETE_QUESTION, id)
    // },
    // async [questionTypes.ACTION_DELETE_QUESTION]({ commit }, id) {
    //   await api.delete(`/delete/${id}`)
    //   commit(questionTypes.MUTATION_DELETE_QUESTION, id)
    // },

  },
  mutations: {
    SET_QUESTION(state, questions) {
      state.questions = questions
    },
    [questionTypes.MUTATION_SET_QUESTIONS]: (state, questions) => {
      state.questions = questions
    },
    [questionTypes.MUTATION_ADD_QUESTION]: (state, question) => {
      // state.questions.unshift(question)
      state.questions.push(question)
      state.questions = question
    },
    // [questionTypes.MUTATION_DELETE_QUESTION](state,  id) {
    //   state.questionses = state.questions.filter
    // }
  },
}
}
