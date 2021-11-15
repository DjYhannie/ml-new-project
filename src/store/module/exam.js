import store from '..';
import api from '../../libs/axios'

export default {
  state: {
    namespaced: true,
    examQuestionnaires: {},
    questionnaire: {},
    examResults: {},
    exam: {},
    result: {},
    users: {},
    user: [],
    id: '',
  },
  getters: {
    GET_EXAM_QUESTIONNAIRE: state => state.examQuestionnaires,
    get_id: state => state.id,
    GET_QUESTIONNAIRE_DETAILS: state => state.exam,
    GET_EXAM_QUESTIONNAIRE_RESULT: state => state.examResults,
    GET_RESULT: state => state.result,
    GET_USERS: state => state.users,
  },
  actions: {
    async ACTION_GET_EXAM_QUESTIONNAIRE({ commit, getters }) {
      const res = await api.get(`/questionnaire/${getters.get_id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      console.log('QUESTIONNAIRE/ID', res)
      let random = res.data.data.randomizedQuestions
      random = (JSON.parse(random)).map(question => {
        question.choices = JSON.parse(question.choices)
        console.log(random)
        return question
      })
      commit('SET_QUESTIONNAIRE', res.data.data.questionnaire)
      commit('SET_EXAM_QUESTIONNAIRE', random)
      // commit('SET_EXAM_QUESTIONNAIRE_ID', res.data.data.id)
      console.log('RANDOM', random)
      return random
    },
    async ACTION_GET_USERS({ commit }, user) {
      const response = await api.get('/users/${user.id}', { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      console.log('USERS', response)
      commit('SET_RESULT', response.data)
      return response
    },
    async ACTION_ADD_EXAM_QUESTIONNAIRE({ commit }, addExamQuestionnaire) {
      const response = await api.post('/checkanswer', addExamQuestionnaire, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      // commit('SET_EXAM_QUESTIONNAIRE', response.data.data)
      console.log('CHACK_ANSWER__', response)
      await commit('SET_EXAM_RESULT', response.data)
      return response
    },
    // async ACTION_GET_EXAM_RESULT({ commit }) {
    //   console.log(store.getters.get_id);
    //   const res = await api.get(`/result`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
    //   console.log(res)
    //   let random = res.data.data.randomizedQuestions
    //   random = (JSON.parse(random)).map(question => {
    //     question.choices = JSON.parse(question.choices)
    //     return question
    //   })
    //   commit('SET_EXAM_QUESTIONNAIRE', random)
    //   commit('SET_EXAM_QUESTIONNAIRE_ID', res.data.data.id)
    //   return random
    // },
  },
  mutations: {
    SET_EXAM_QUESTIONNAIRE(state, examQuestionnaires) {
      state.examQuestionnaires = examQuestionnaires
    },
    SET_EXAM_QUESTIONNAIRE_ID(state, id) {
      state.id = id
    },
    SET_QUESTIONNAIRE(state, questionnaire) {
      state.exam = questionnaire
    },
    SET_EXAM_RESULT(state, remarks) {
      state.examResults = remarks
    },
    SET_RESULT(state, result) {
      state.result = result
    },
    SET_USER(state, users) {
      state.users= users
    }
  },
}
