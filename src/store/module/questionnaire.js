import api from '../../libs/axios'

export default {
  state: {
    namespaced: true,
    questionnaires: [],
    questionnaire: [],
    emails: [],
    // sendQuestionnaire: [],
    // courses: {},
    questions: {},
    createquestion: '',
    show: true,
    // index: null,
  },
  getters: {
    GET_QUESTIONNAIRE: state => state.questionnaires,
    GET_EMAILS: state => state.emails,
  },
  actions: {
    async ACTION_GET_QUESTIONNAIRE({ commit }) {
      const response = await api.get('/questionnaire', { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      commit('SET_QUESTIONNAIRE', response.data.data)
      return response
    },
    async ACTION_ADD_QUESTIONNAIRE({ commit, dispatch }, questionnaire) {
      const response = await api.post('/questionnaire/create', questionnaire, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      dispatch('ACTION_GET_QUESTIONNAIRE')
      commit('SET_QUESTIONNAIRE', response.data.data)
      return response
    },
    async ACTION_UPDATE_QUESTIONNAIRE({ dispatch }, id) {
      const response = await api.put(`questionnaire/update/${id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      await dispatch('ACTION_GET_QUESTIONNAIRE')
      return response
    },
    async ACTION_DELETE_QUESTIONNAIRE({ dispatch }, id) {
      const response = await api.delete(`/questionnaire/delete/${id}`, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      await dispatch('ACTION_GET_QUESTIONNAIRE')
      return response
    },
    async ACTION_SEND_QUESTIONNAIRE({ commit }, emails) {
      const response = await api.post('/send/invitation', emails, { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
      console.log('SEND_INVITATION__', response)
      commit('SET_USER')
      return response
    },
  },
  mutations: {
    SET_QUESTIONNAIRE(state, questionnaires) {
      state.questionnaires = questionnaires
    },
    SET_USER(state, emails) {
      state.emails = emails
    },
  },
}