<template>
  <div class="auth-wrapper auth-v2">
    <b-row class="auth-inner m-0">
      <!-- Brand logo-->
      <b-link class="brand-logo">
        <!-- <vuexy-logo /> -->
        <b-img :src="require('@/assets/images/logo/header-logo.png')" />
        <h2 class="brand-text text-danger ml-1">ML OEx</h2>
      </b-link>
      <!-- /Brand logo-->

      <!-- Left Text-->
      <b-col lg="8" class="d-none d-lg-flex align-items-center p-5">
        <div
          class="w-100 d-lg-flex align-items-center justify-content-center px-5"
        >
          <b-img fluid :src="imgUrl" alt="Login V2" />
        </div>
      </b-col>
      <!-- /Left Text-->

      <!-- Login-->
      <b-col lg="4" class="d-flex align-items-center auth-bg px-2 p-lg-5">
         <b-col sm="8" md="6" lg="12" class="px-xl-2 mx-auto">
          <b-card-title title-tag="h2" class="font-weight-bold mb-1">
            Welcome to ML OEx - MLhuillier Online Exam! 👋
          </b-card-title>
          <b-card-text class="mb-2">
            Please sign-in to your account to start the exam
          </b-card-text>

          <!-- form -->
          <validation-observer ref="loginValidation">
            <b-form @submit.prevent="submitQuestion" @click="editQuestion">
              <!-- course -->
              <b-form-group label="Course" label-for="course">
                <validation-provider
                  #default="{ errors }"
                  name="Course"
                  rules="required"
                >
                  <b-form-input
                    id="course"
                    v-model="questionDescription.course"
                    :state="errors.length > 0 ? false : null"
                    name="course"
                    placeholder="Course"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              <!-- question -->
              <b-form-group label="Question" label-for="question">
                <validation-provider
                  #default="{ errors }"
                  name="Question"
                  rules="required"
                >
                  <b-form-input
                    id="course"
                    v-model="questionDescription.question"
                    :state="errors.length > 0 ? false : null"
                    name="question"
                    placeholder="Create Question"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              <!-- A -->
              <b-form-group label="A" label-for="a">
                <validation-provider
                  #default="{ errors }"
                  name="A"
                  rules="required"
                >
                  <b-form-input
                    id="a"
                    v-model="questionDescription.choices.A"
                    :state="errors.length > 0 ? false : null"
                    name="a"
                    placeholder="A"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              <!-- B -->
              <b-form-group label="B" label-for="b">
                <validation-provider
                  #default="{ errors }"
                  name="B"
                  rules="required"
                >
                  <b-form-input
                    id="a"
                    v-model="questionDescription.choices.B"
                    :state="errors.length > 0 ? false : null"
                    name="b"
                    placeholder="B"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              <!-- C -->
              <b-form-group label="C" label-for="c">
                <validation-provider
                  #default="{ errors }"
                  name="C"
                  rules="required"
                >
                  <b-form-input
                    id="c"
                    v-model="questionDescription.choices.C"
                    :state="errors.length > 0 ? false : null"
                    name="c"
                    placeholder="C"
                  />
                  <small class="text-danger">{{ errors[0] }}</small>
                </validation-provider>
              </b-form-group>
              <!-- D -->
              <b-form-group label="D" label-for="d">
                <validation-provider
                  #default="{ errors }"
                  name="D"
                  rules="required"
                >
                  <b-form-input
                    id="a"
                    v-model="questionDescription.choices.D"
                    :state="errors.length > 0 ? false : null"
                    name="d"
                    placeholder="D"
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
                Sign in
              </b-button>
            </b-form>
          </validation-observer>
        </b-col>
      </b-col>
      <!-- /Login-->
    </b-row>
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



