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
    getQuestions(state) {
      return state.questions
    },
  },
  actions: {
    async [questionTypes.ACTION_SET_QUESTIONS]({ commit }) {
      api
        .get('/questions')
        .then(response => {
          commit(questionTypes.MUTATION_SET_QUESTIONS, response.data)
        })
    },
    async [questionTypes.ACTION_ADD_QUESTION]({ commit }, question) {
      api
        .post('/add', question)
        .then(response => {
          console.log(question)
          commit(questionTypes.MUTATION_ADD_QUESTION, response.data)
        })
    },
  },
  mutations: {
    // ADD_QUESTION(state, createquestion) {
    //   state.questions.unshift(createquestion)
    // },
    [questionTypes.MUTATION_ADD_QUESTION]: (state, questions) => {
      state.questions.unshift(questions)
    },
    [questionTypes.MUTATION_SET_QUESTIONS]: (state, questions) => {
      state.questions = questions
    },
  },
}
