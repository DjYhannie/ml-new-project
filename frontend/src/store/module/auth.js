import axios from '../../libs/axios'

const getters = {
  isAuthenticated: state => !!state.user,
  StatePosts: state => state.posts,
  StateUser: state => state.user,
  StateToken: state => state.token,
}
const actions = {
  // async Register({ commit, dispatch }, form) {
  //   // const response =
  //   await axios.post('/register', form)
  //   console.log('AUTH.JS', await form)
  //   commit('setUser', form)
  //   await dispatch('LogIn', form)
  // },
  // FOR DEMO
  async Register({ commit, dispatch }, form) {
    // const response =
    const response = await axios.post('/register', form)
    console.log('REGISTRATION RESPONSE', response)
    console.log('AUTH.JS', await form)
    commit('setUser', form)
    if (response.data.user.role === 'admin') {
      await dispatch('LogIn', form)
    } else {
      await dispatch('UserLogin', form)
    }
  },
  // ADMIN USER
  // async LogIn({ commit }, User) {
  //   console.log('Calling Admin...')
  //   const response = await axios.post('/adminlogin', User)
  //   console.log('ADMIN RESPONSE', response)
  //   console.log('ADMIN USER', User)
  //   commit('setUser', response.data)
  //   commit('setToken', response.data.token)
  //   sessionStorage.setItem('setToken', response.data.token)
  // },
  // FOR DEMO
  // async LogIn({ commit, dispatch }, User) {
  //   console.log('Calling Admin...')
  //   const response = await axios.post('/adminlogin', User)
  //   console.log('ADMIN RESPONSE', response)
  //   // if (response.data.user.role === 'admin') {
  //   //   console.log('ADMIN', User)
  //   //   commit('setUser', response.data)
  //   //   commit('setToken', response.data.token)
  //   //   sessionStorage.setItem('setToken', response.data.token)
  //   // } else {
  //   //   await dispatch('UserLogin', User)
  //   // }
  // },
  // NORMAL USER
  async UserLogin({ commit }, User) {
    console.log('Calling Normal User...')
    const response = await axios.post('/login', User)
    console.log('USER RESPONSE', response)
    console.log('USER', User)
    commit('setUser', response.data)
    commit('setToken', response.data.token)
    sessionStorage.setItem('setToken', response.data.token)
  },
  async LogOut({ commit }) {
    const user = null
    commit('logout', user)
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
    state.user = {}
    state.posts = null
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
