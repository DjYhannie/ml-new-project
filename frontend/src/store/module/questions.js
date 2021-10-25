import api from '../../libs/axios'
import * as questionTypes from '../types/questions'

// !important
/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  state: {
    namespaced: true,
    questions: {},
    courses: [],
    show: true,
    index: null,
    token: sessionStorage.getItem('token'),
  },
  getters: {
    GET_INDEX: state => state.index,
    GET_QUESTION: state => state.questions,
    GET_COURSES: state => state.courses,
  },
  actions: {
    ACTION_GET_QUESTIONS({ commit }) {
      api.get('/questions', { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
        .then(res => res).then(choice => {
          const questions = choice.data.data.map(c => {
            c.choices = JSON.parse(c.choices)
            return c
          })
          this.courses = []
          questions.forEach(element => {
            this.courses.push(element.course)
          })
          this.courses = [...new Set(this.courses)]
          console.log(questions)
          commit('SET_QUESTION', questions)
          commit('SET_COURSES', this.courses)
        })
    },
    async ACTION_ADD_QUESTION({ commit, dispatch }, addQuestion) {
      const response = await api.post('/questions/add', addQuestion, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      console.log('ADD QUESTION', response.data.questions)
      commit('SET_QUESTION', response.data.questions)
      await dispatch('ACTION_GET_QUESTIONS')
      return response
    },
    async ACTION_DELETE_QUESTION({ dispatch }, id) {
      const response = await api.delete(`questions/delete/${id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      console.log(response)
      await dispatch('ACTION_GET_QUESTIONS')
      return response
    },
    async ACTION_UPDATE_QUESTION({ dispatch, questions }, id) {
      const response = await api.put(`questions/update/${id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      console.log(response)
      await dispatch('ACTION_GET_QUESTIONS', questions)
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
    [questionTypes.MUTATION_SET_QUESTIONS]: (state, questions) => {
      state.questions = questions
    },
    [questionTypes.MUTATION_ADD_QUESTION]: (state, question) => {
      state.questions = question
    },
  },
}
