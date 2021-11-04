import store from '..';
import api from '../../libs/axios'

export default {
  state: {
    namespaced: true,
    examQuestionnaires: {},
    questionnaire: {},
    examResults: [],
    exam: {},
    id: '',
  },
  getters: {
    GET_EXAM_QUESTIONNAIRE: state => state.examQuestionnaires,
    get_id: state => state.id,
    GET_QUESTIONNAIRE_DETAILS: state => state.exam,
  },
  actions: {
    async ACTION_GET_EXAM_QUESTIONNAIRE({ commit }) {
      const res = await api.get(`/questionnaire/1`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      console.log(res)
      let random = res.data.data.randomizedQuestions
      random = (JSON.parse(random)).map(question => {
        question.choices = JSON.parse(question.choices)
        return question
      })
      commit('SET_QUESTIONNAIRE', res.data.data.questionnaire)
      commit('SET_EXAM_QUESTIONNAIRE', random)
      commit('SET_EXAM_QUESTIONNAIRE_ID', res.data.data.id)
      return random
    },
    async ACTION_GET_RESULTS({ commit }) {
      const response = await api.get('/result/all', { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      console.log('RESULTS_ALL', response)
      commit('SET_EXAM_RESULT', response.data)
      return response
    },
    async ACTION_ADD_EXAM_QUESTIONNAIRE({ commit, dispatch }, addExamQuestionnaire) {
      const response = await api.post('/checkanswer', addExamQuestionnaire, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      commit('SET_EXAM_QUESTIONNAIRE', response.data.data)
      await dispatch('ACTION_GET_EXAM_QUESTIONNAIRE')
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
    }
  },
}