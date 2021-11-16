import api from '../../libs/axios'
import * as questionTypes from '../types/questions'

// !important
/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  state: {
    namespaced: true,
    questions: {},
    question: {},
    courses: [],
    show: true,
    index: null,
    token: sessionStorage.getItem('token'),
    questionID: '',
  },
  getters: {
    GET_INDEX: state => state.index,
    GET_QUESTION: state => state.questions,
    GET_COURSES: state => state.courses,
  },
  actions: {
    ACTION_GET_QUESTIONS({ commit }) {
      api.get('/questions', { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        .then(choice => {
          const questions = choice.data.data.map(c => {
            c.choices = JSON.parse(c.choices)
            return c
          })
          
          // console.log(questions)
          this.courses = []
          questions.forEach(element => {
            this.courses.push(element.course)
          })
          this.courses = [...new Set(this.courses)]
          commit('SET_QUESTION', questions)
          commit('SET_COURSES', this.courses)
        })
    },
    async ACTION_ADD_QUESTION({ commit, dispatch }, addQuestion) {
      const response = await api.post('/questions/add', addQuestion, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      commit('SET_QUESTION', response.data.questions)
      await dispatch('ACTION_GET_QUESTIONS')
      return response
    },
    async ACTION_DELETE_QUESTION({ dispatch }, question) {
      const response = await api.delete(`questions/delete/${question.id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      await dispatch('ACTION_GET_QUESTIONS')
      return response
    },
    async ACTION_UPDATE_QUESTION({ dispatch, commit }, question) {
      console.log(question)
      const response = api.post(`questions/update/${question.id}`, question, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      .then(res => res).then(choice => {
        dispatch('ACTION_GET_QUESTIONS')
        // commit('SET_ID', response)
        // console.log('EDIT',response);
      })
      return response
    },
  },
  mutations: {
    SET_QUESTION(state, questions) {
      state.questions = questions
    },
    SET_COURSES(state, courses) {
      state.courses = courses
    },
    SET_ID(state, questionID) {
      state.questionID = questionID
    },
    [questionTypes.MUTATION_SET_QUESTIONS]: (state, questions) => {
      state.questions = questions
    },
    [questionTypes.MUTATION_ADD_QUESTION]: (state, question) => {
      state.question = question
    },
  },
}
