import { getUserData } from '@/auth/utils'
import api from '../../libs/axios'

export default {
    state: {
        namespaced: true,
          userInfo: [{
            status: '',
            name: '',
            userEmail: '',
            password: '',
            confirmPassword: '',
          }],
    },
    actions: {
      async getUserData({ commit }, user)
    },
}