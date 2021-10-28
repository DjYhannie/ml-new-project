import store from '..';
import api from '../../libs/axios'

export default {
  state: {
    namespaced: true,
    examQuestionnaires: {},
    id: 1
  },
  getters: {
    GET_EXAM_QUESTIONNAIRE: state => state.examQuestionnaires,
    get_id: state => state.id
  },
  actions: {
    async ACTION_GET_EXAM_QUESTIONNAIRE({ commit }) {
      console.log(store.getters.get_id);
      const res = await api.get(`/questionnaire/${store.getters.get_id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      let random = res.data.data.randomizedQuestions
      random = (JSON.parse(random)).map(question => {
        question.choices = JSON.parse(question.choices)
        return question
      })
      commit('SET_EXAM_QUESTIONNAIRE', random)
      commit('SET_EXAM_QUESTIONNAIRE_ID', res.data.data.id)
      return random
    },
    async ACTION_ADD_EXAM_QUESTIONNAIRE({ commit, dispatch }, addExamQuestionnaire) {
      const response = await api.post('/checkanswer', addExamQuestionnaire, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      commit('SET_EXAM_QUESTIONNAIRE', response.data.data)
      await dispatch('ACTION_GET_EXAM_QUESTIONNAIRE')
      return response
      //JSON.stringifu
    },
  },
  mutations: {
    SET_EXAM_QUESTIONNAIRE(state, examQuestionnaires) {
      state.examQuestionnaires = examQuestionnaires
    },
    SET_EXAM_QUESTIONNAIRE_ID(state, id) {
      state.id = id
    }
  },
}
