import axios from '../../libs/axios'

const getters = {
  isAuthenticated: state => !!state.user,
  StatePosts: state => state.posts,
  StateUser: state => state.user,
  StateToken: state => state.token,
}
const actions = {
  // async Register(form) {
  //   // const UserForm = new FormData()
  //   console.log(form)
  //   const response = await axios.post('/register', form)
  //   console.log(response)
  //   // console.log(form)
  //   // UserForm.append('name', form.name)
  //   // UserForm.append('email', form.email)
  //   // UserForm.append('password', form.password)
  //   // UserForm.append('password_confirmation', form.password_confirmation)
  //   // await dispatch('LogIn', UserForm)
  //   return response
  // },
  async LogIn({ commit }, User) {
    // const response = await axios.post('/adminlogin', User)
    const response = await axios.post('/login', User)
    commit('setUser', response.data.user)
    commit('setToken', response.data.token)
    sessionStorage.setItem('setToken', response.data.token)
    return response
  },
  async UserLogIn({ commit }, User) {
    const response = await axios.post('/login', User)
    commit('setUser', response.data.user)
    commit('setToken', response.data.token)
    sessionStorage.setItem('setToken', response.data.token)
    return response
  },
  async LogOut({ commit }) {
    const user = null
    commit('/logout', user)
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
