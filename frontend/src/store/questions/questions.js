import api from '../../libs/axios'

export default {
    state: {
        namespaced: true,
        questions: [{
            course: '',
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
        getCreatedQuestion (state) {
            return state.createquestion
        },
        getQuestions(state) {
            return state.questions
        },
        getUpdated(state) {
            return state.createquestion
        },
    },
    actions: {
        async getQuestions({ commit }) {
            api.get('https://examapp-backend.herokuapp.com//get-all-questions').then(response => {
                commit('SET_QUESTIONS', response.data)
            })
        },
        async getCreatedQuestion({ commit }, createquestion) {
            api.post('https://examapp-backend.herokuapp.com/add-question', { createquestion,
            }).then(response => {
                commit('ADD_QUESTION', response.data)
            })
        },
    },
    mutations: {
        ADD_QUESTION(state, createquestion) {
            state.questions.unshift(createquestion)
        },
        SET_QUESTIONS(state, questions) {
            // state.questions = questions
            state.questions = {...state, questions}
        },
    },
}