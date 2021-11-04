import Vue from 'vue'
import { ToastPlugin, ModalPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import axios from 'axios'

import router from './router'
import store from './store/index'
import App from './App.vue'
import $ from 'jquery'


// Global Components
import './global-components'

// 3rd party plugins
import '@/libs/portal-vue'
import '@/libs/toastification'

axios.defaults.baseURL = 'https://examapp-backend.herokuapp.com/api/'
axios.defaults.headers.get['header-name'] = 'value'
axios.defaults.headers.common['Access-Control-Allow-Origin'] = 'http://localhost:8080/'
// 'Access-Control-Allow-Origin', '*'
axios.defaults.headers.common['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS,DELETE,PUT'
// axios.defaults.baseURL = 'https://examapp-backend.herokuapp.com/api/'
// axios.defaults.headers.get.Accepts = 'application/json'
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'
// axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept'

// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(BootstrapVueIcons)

// Composition API
Vue.use(VueCompositionAPI)

//jquery
// var $ = require('jquery')
Vue.use($)

// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
