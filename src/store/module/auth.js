import axios from '../../libs/axios'

const getters = {
  isAuthenticated: state => !!state.user,
  StatePosts: state => state.posts,
  StateUser: state => {
    return state.user
  },
  StateToken: state => state.token,
}
const actions = {
  async Register({ commit }, form) {
    const response = await axios.post('/register', form)
    commit('setUser', form)
    return response
  },
  async LogIn({ commit }, User) {
    const response = await axios.post('/adminlogin', User,
      {
        Headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        },
      })
    commit('setUser', response.data.user)
    commit('setToken', response.data.token)
    sessionStorage.setItem('token', response.data.token)
    return response
  },
  async ResetPassword({ commit }, Email) {
    const response = await axios.post('/send/resetpassword', Email)
    commit('setUser', response.data.user)
    return response
  },
  async UserLogin({ commit }, User) {
    const response = await axios.post('/login', User)
    if (response.data.token) {
      commit('setUser', response.data.user)
      commit('setToken', response.data.token)
      sessionStorage.setItem('token', response.data.token)
    }
    return response
  },
  async LogOut({ commit }) {
    const token = null
    commit('logOut', token)
  },
}
const mutations = {
  setUser(state, username) {
    state.user = username
  },
  StatePosts(state, posts) {
    state.posts = posts
  },
  setToken(state, token) {
    state.token = token
  },
  LogOut(state) {
    state.user = null
    state.posts = null
    state.token = null
    window.sessionStorage.clear()
  },
}
const state = {
  user: null,
  posts: null,
  token: sessionStorage.token ? sessionStorage.getItem('token') : null,
}

export default {
  state,
  getters,
  actions,
  mutations,
}
