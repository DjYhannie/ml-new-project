import api from '../../libs/axios'

export default {
    state: {
        namespaced: true,
        examQuestionnaire: {},
    },
    getters: {
        GET_EXAM_QUESTIONNAIRE: state => state.examQuestionnaire,
    },
    actions: {
        ACTION_GET_EXAM_QUESTIONNAIRE({ commit }) {
            const response = await api.get('/questionnaire/{id}', { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
            console.log(response)
            commit('SET_EXAM_QUESTIONNAIRE', response.data.data)
            return response
        }
    },
    mutations: {
        SET_EXAM_QUESTIONNAIRE(state, examQuestionnaire) {
            state.examQuestionnaire = examQuestionnaire
        }
    }
}