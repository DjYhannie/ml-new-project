import api from '../../libs/axios'
import * as userTypes from '../types/users'

export default {
  auth: {
    state: {
      user: sessionStorage.user ? JSON.parse(sessionStorage.getItem('user')) : null,
      token: sessionStorage.token ? sessionStorage.getItem('token') : null,
    },
  },
  state: {
    namespaced: true,
    //   userInfo: [{
    //     status: '',
    //     name: '',
    //     userEmail: '',
    //     password: '',
    //     confirmPassword: '',
    //   }],
    user: {},

  },
  getters: {
    [userTypes.GETTER_LOGIN]: state => state.user,
    getUser: state => state.user,
    authenticated: state => state.token !== null,
    token: state => state.token,

  },
  actions: {
    async [userTypes.ACTION_SET_LOGIN]({ commit }) {
      api.post('http://127.0.0.1:8000/api/adminlogin').then(response => {
        commit(userTypes.MUTATION_SET_LOGIN, response.data)
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  mutations: {
    [userTypes.MUTATION_SET_LOGIN]: (state, user) => {
      state.user = user
    },
  },
}
