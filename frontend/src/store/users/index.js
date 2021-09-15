import api from '../../libs/axios'

export default {
  namespaced: true,
  state: {
    questions: [{
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
    getPost(state) {
      return state.createquestion
    },
    getQuestions(state) {
      return state.createquestion
    },
    getUpdated(state) {
      return state.createquestion
    },
  },
  actions: {
    async getQuestions({ commit }) {
      api.get('/https://examapp-backend.herokuapp.com/').then(response => {
        commit('SET_QUESTIONS', response.data)
      })
    },
    async storeQuestion({ commit }, createquestion) {
      api
        .post('/https://examapp-backend.herokuapp.com//1', {
          createquestion,
        })
        .then(response => {
          commit('ADD_QUESTION', response.data)
        })
    },
    // async deleteQuestion({ commit }, id) {
    //   api.delete(`/add-question/${id}`).then(response => {
    //     console.log(response)
    //     commit('DELETE_QUESTION', id)
    //   })
    // },
    // async updateQuestion({ commit }, { id, question }) {
    //   api
    //     .put(`/add-question/update/${id}`, {
    //       question,
    //     })
    //     .then(response => {
    //       console.log(response)
    //       commit('UPDATE_QUESTION', id, question)
    //     })
    // },
  },
  modules: {},
  mutations: {
    SET_QUESTIONS(state, questions) {
      state.questions = questions
    },
    ADD_QUESTION(state, question) {
      state.questions.unshift(question)
    },
    // DELETE_QUESTION(state, id) {
    //   const index = state.questions.findIndex(question => question.id === id)
    //   state.questions.splice(index, 1)
    // },
    // UPDATE_QUESTION(state, id, question) {
    //   const index = state.questions.findIndex(question => question.id === id)
    //   state.questions.splice(index, 1, question)
    // },
  },
}
