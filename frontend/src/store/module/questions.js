import api from '../../libs/axios'
import * as questionTypes from '../types/questions'

export default {
  state: {
    namespaced: true,
    questions: [{
      course: '',
      question: '',
      answer: '',
      choiceA: '',
      choiceB: '',
      choiceC: '',
      choiceD: '',
    }],
    createquestion: '',
    show: true,
  },
  getters: {
    [questionTypes.GETTER_QUESTION]: state => state.questions,
    // getQuestions(state) {
    //   return state.questions
    // },
  },
  actions: {
    // async [questionTypes.ACTION_SET_QUESTIONS]({ commit }) {
    //   api
    //     .get('http://127.0.0.1:8000/api/questions')
    //     .then(response => {
    //       commit(questionTypes.MUTATION_SET_QUESTIONS, response.data)
    //     })
    // },
    async [questionTypes.ACTION_SET_QUESTIONS]({ commit }) {
      const res = await api.get('/questions')
      commit(questionTypes.MUTATION_SET_QUESTIONS, res.data)
    },
    async [questionTypes.ACTION_ADD_QUESTION]({ commit }, question) {
      const res = await api.post('/questions/add', { question })
      console.log('SUCCESSFUL', res)
      commit(questionTypes.MUTATION_ADD_QUESTION, res.data, question)
    },
    // async [questionTypes.ACTION_DELETE_QUESTION]({ commit }, id) {
    //   await api.delete(`/delete/${id}`)
    //   commit(questionTypes.MUTATION_DELETE_QUESTION, id)
    // },

  },
  mutations: {
    // ADD_QUESTION(state, createquestion) {
    //   state.questions.unshift(createquestion)
    // },
    [questionTypes.MUTATION_SET_QUESTIONS]: (state, questions) => {
      state.questions = questions
    },
    [questionTypes.MUTATION_ADD_QUESTION]: (state, question) => {
      // state.questions.unshift(question)
      state.questions.push(question)
    },
    // [questionTypes.MUTATION_DELETE_QUESTION](state,  id) {
    //   state.questionses = state.questions.filter
    // }
  },
}
