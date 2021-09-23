import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import questions from '@/store/module/questions'
import users from '@/store/module/users'
import app from './app'
import appConfig from './app-config'
import verticalMenu from './vertical-menu'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app,
    appConfig,
    verticalMenu,
    questions,
    users,
  },
  strict: process.env.DEV,
})
