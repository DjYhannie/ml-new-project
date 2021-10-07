<template>
  <div class="auth-wrapper auth-v2">
      <!-- Brand logo-->
      <!-- Login-->
          <!-- form -->
          <validation-observer ref="loginValidation">
            <b-form class="auth-login-form mt-2" @submit.prevent>
              <!-- email -->
              <b-form-group label="Email" label-for="login-email">
                <validation-provider
                  #default="{ errors }"
                  name="Email"
                  rules="required|email"
                >
                  <b-form-input
                    id="login-email"
                    v-model="data.email"
                    :state="errors.length > 0 ? false : null"
                    name="login-email"
                    placeholder="name.test@mlhuillier.com"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              <!-- submit button -->
              <b-button
                type="submit"
                variant="danger"
                block
                @click="validationForm"
              >
                Send
              </b-button>
            </b-form>
          </validation-observer>
      <!-- /Login-->

  </div>
</template>

<script>
/* eslint-disable global-require */
// eslint-disable-next-line
/* eslint-disable */
/* eslint-disable eol-last */
import { ValidationProvider, ValidationObserver } from 'vee-validate'
// import VuexyLogo from '@core/layouts/components/Logo.vue'
import {
  BRow,
  BCol,
  BLink,
  BFormGroup,
  BFormInput,
  BInputGroupAppend,
  BInputGroup,
  BCardText,
  BCardTitle,
  BImg,
  BForm,
  BButton,
} from 'bootstrap-vue';
import { required, email } from '@validations'
import { togglePasswordVisibility } from '@core/mixins/ui/forms'
import store from '@/store/index'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'
import { mapActions } from 'vuex'
import * as userTypes from '../store/types/users'
import * as auth from '../store/module/auth'


export default {
  components: {
    BRow,
    BCol,
    BLink,
    BFormGroup,
    BFormInput,
    BInputGroupAppend,
    BInputGroup,
    BCardText,
    BCardTitle,
    BImg,
    BForm,
    BButton,
    // VuexyLogo,
    ValidationProvider,
    ValidationObserver,
  },
  mixins: [togglePasswordVisibility],
  data() {
    return {
      isError: false,
      status: '',
      data: {
        password: '',
        email: '',
      },
      sideImg: require('@/assets/images/pages/login-accept-task.svg'),
      // validation rulesimport store from '@/store/index'
      required,
      email,
    }
  },
  computed: {
    passwordToggleIcon() {
      return this.passwordFieldType === 'password' ? 'EyeIcon' : 'EyeOffIcon'
    },
    imgUrl() {
      if (store.state.appConfig.layout.skin === 'dark') {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.sideImg = require('@/assets/images/pages/login-accept-task.svg')
        return this.sideImg
      }
      return this.sideImg
    },
  },
  mounted() {
    // console.clear()
  },
  methods: {
        validationForm() {
    
      this.$refs.loginValidation.validate().then(async success => {
        if (success) {
          const login = await this.$store.dispatch('LogIn', this.data)
          console.log('LOGIN_', login)
          const token = this.$store.getters.StateToken
          console.log('TOKEN_', token)
          const message = login.data.message
          if (this.$store.getters.StateToken) {
            this.$router.push({ name: 'home' })
          } else {
            this.$toast({
            component: ToastificationContent,
            props: {
              title: `${message}`,
              icon: 'EditIcon',
              variant: 'danger',
            },
          }) 
          }
        }
      })
    },
    }
}
</script>

<style lang="scss">
@import "@core/scss/vue/pages/page-auth.scss";
</style>
