// import { get } from 'core-js/core/dict'
// import store from '..'
import api from '../../libs/axios'

export default {
    state: {
        questions: [],
        question: '',
    },
    getters: {
        getPost (state) {
            return get.question
        },
    },
    actions: {
        async storeQuestion({ commit }, question) {
            api.post('/add-question', { question,
            }).then(response => {
                commit('ADD_QUESTION', response.data)
            })
        },
    },
    mutations: {
        ADD_QUESTION(state, question) {
            state.questions.unshift(question)
        },
    },
}