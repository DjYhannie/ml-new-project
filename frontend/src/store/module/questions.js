// import { data } from 'jquery'
import api from '../../libs/axios'
import * as questionTypes from '../types/questions'

// important ni siya
/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  state: {
    namespaced: true,
    questions: {},
    courses: {},
    show: true,
  },
  getters: {
    GET_QUESTION: state => state.questions,
    GET_COURSE: state => state.courses,
  },
  actions: {
    // OK NA
    ACTION_GET_QUESTIONS({ commit }) {
      api.get('/questions')
        .then(res => res).then(choice => {
          const questions = choice.data.data.map(c => {
            c.choices = JSON.parse(c.choices)
            return c
          })
          console.log(questions)
          commit('SET_QUESTION', questions)
        })
    },
    // OK NA
    async ACTION_ADD_QUESTION({ commit, dispatch }, addQuestion) {
      const response = await api.post('/questions/add', addQuestion)
      console.log('ADD QUESTION', response.data.questions)
      commit('SET_QUESTION', response.data.questions)
      await dispatch('ACTION_GET_QUESTIONS')
      return response
    },
    async ACTION_GET_COURSE({ commit }) {
      const response = await api.get('/course')
      console.log(response.data.courses)
      commit('SET_COURSES', response.data.courses)
      return response.data.courses
    },
    // OK NA
    async ACTION_ADD_COURSE({ commit }, addCourse) {
      const response = await api.post('/course/add', addCourse)
      commit('SET_COURSES', response)
      return response
    },
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
    SET_COURSES(state, courses) {
      state.courses = courses
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
