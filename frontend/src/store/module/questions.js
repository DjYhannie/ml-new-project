// import { data } from 'jquery'
import api from '../../libs/axios'
import * as questionTypes from '../types/questions'

/* eslint no-param-reassign: ["error", { "props": false }] */
export default {
  state: {
    namespaced: true,
    questions: {},
    course: '',
    show: true,
  },
  getters: {
    // [questionTypes.GETTER_QUESTION]: state => state.questions,
    // GET_QUESTION(state) {
    //   return state.questions
    // },
    GET_QUESTION: state => state.questions,
    GET_COURSE: state => state.course,
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
    async ACTION_ADD_COURSE({ commit }, addCourse) {
      console.log(addCourse)
      const response = await api.post('/course/add', addCourse)
      console.log(response)
      commit('SET_COURSE', response)
      return response
    },
  },
  mutations: {
    SET_QUESTION(state, questions) {
      state.questions = questions
    },
    SET_COURSE(state, course) {
      state.course = course
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
