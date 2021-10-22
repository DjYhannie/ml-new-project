import api from '../../libs/axios'

export default {
    state: {
        namespaced: true,
        examQuestionnaires: {},
    },
    getters: {
        GET_EXAM_QUESTIONNAIRE: state => state.examQuestionnaires,
    },
    actions: {
        ACTION_GET_EXAM_QUESTIONNAIRE({ commit }) {
            const response = await api.get('/questionnaire/{id}', { headers: { Authorization: `Bearer ${sessionStorage.getItem('token')}` } })
            console.log('Exam ...', response)
            commit('SET_EXAM_QUESTIONNAIRE', response.data)
            return response
        }
    },
    mutations: {
        SET_EXAM_QUESTIONNAIRE(state, examQuestionnaires) {
            state.examQuestionnaires = examQuestionnaires
        }
    }
}