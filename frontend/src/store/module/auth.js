import axios from '../../libs/axios'

const getters = {
  isAuthenticated: state => !!state.user,
  StatePosts: state => state.posts,
  StateUser: state => state.user,
  StateToken: state => state.token,
}
const actions = {
  async Register({ commit }, form) {
    const response = await axios.post('/register', form)
    console.log('REGISTRATION RESPONSE', response)
    console.log('AUTH.JS', await form)
    commit('setUser', form)
    return response
  },
  async LogIn({ commit }, User) {
    console.log('Calling Admin...')
    const response = await axios.post('/adminlogin', User,
      {
        Headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        },
      })
    console.log('ADMIN RESPONSE', response)
    commit('setUser', response.data.user)
    commit('setToken', response.data.token)
    sessionStorage.setItem('token', response.data.token)
    return response
  },
  async ResetPassword({ commit }, Email) {
    console.log('RESET__')
    console.log(Email)
    const response = await axios.post('/send/resetpassword', Email)
    console.log('RESET PASSWORD', response)
    commit('setUser', response.data)
    return response
  },
  async UserLogin({ commit }, User) {
    console.log('Calling Normal User...')
    const response = await axios.post('/login', User)
    console.log('USER RESPONSE', response)
    if (response.data.token) {
      console.log(response.data.user)
      commit('setUser', response.data.user)
      commit('setToken', response.data.token)
      sessionStorage.setItem('token', response.data.token)
    }
    return response
  },
  async LogOut({ commit }) {
    const token = null
    commit('logOut', token)
    console.log('TOKEN_', token)
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
