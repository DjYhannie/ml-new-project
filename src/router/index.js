import auth from '@/store/module/auth'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
        requiresAuth: true,
      },
    },
    {
      path: '/questions',
      name: 'questions',
      component: () => import('@/views/Questions.vue'),
      meta: {
        pageTitle: 'Questions',
        breadcrumb: [
          {
            text: 'Questions',
            active: true,
          },
        ],
        requiresAuth: true,
      },
    },
    {
      path: '/examinees',
      name: 'examinees',
      component: () => import('@/views/Examinees.vue'),
      meta: {
        pageTitle: 'Examinees',
        breadcrumb: [
          {
            text: 'Examinees',
            active: true,
          },
        ],
        requiresAuth: true,
      },
    },
    {
      path: '/questionnaire',
      name: 'questionnaire',
      component: () => import('@/views/Questionnaire.vue'),
      meta: {
        pageTitle: 'Questionnaire',
        breadcrumb: [
          {
            text: 'Questionnaire',
            active: true,
          },
        ],
        requiresAuth: true,
      },
    },
    {
      path: '/update-profile',
      name: 'update-profile',
      component: () => import('@/views/UpdateProfile.vue'),
      meta: {
        pageTitle: 'UpdateProfile',
        breadcrumb: [
          {
            text: 'UpdateProfile',
            active: true,
          },
        ],
        requiresAuth: true,
      },
    },
    {
      path: '/sample',
      name: 'sample',
      component: () => import('@/views/Sample.vue'),
      meta: {
        layout: 'full',
        requiresAuth: false,
      },
    },
    // {
    //   path : 'https://ml-oex-portal.herokuapp.com/user/take-exam/:id',
    //   name : 'token-exam',
    //   component: () => import('@/views/examinees-page/TakeExam.vue'),
    //   meta: {
    //     pageTitle: 'Take Exam',
    //     breadcrumb: [
    //       {
    //         text: 'Take Examination',
    //         active: true,
    //       },
    //     ],
    //     requiresAuth: true,
    //   },
    // },
    {
      path: '/admin-login',
      name: 'admin-login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
        requiresAuth: false,
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
        requiresAuth: false,
      },
    },
    // Examinees Pages
    {
      path: '/',
      name: 'user-login',
      component: () => import('@/views/examinees-page/UserLogin.vue'),
      meta: {
        layout: 'full',
        requiresAuth: false,
      },
    },
    {
      path: '/reset-password',
      name: 'reset-password',
      component: () => import('@/views/examinees-page/ResetPassword.vue'),
      meta: {
        layout: 'full',
        requiresAuth: false,
      },
    },
    {
      path: '/update-password',
      name: 'update-password',
      component: () => import('@/views/examinees-page/UpdatePassword.vue'),
      meta: {
        layout: 'full',
        requiresAuth: false,
      },
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/examinees-page/Registration.vue'),
      meta: {
        layout: 'full',
        requiresAuth: false,
      },
    },
    {
      path: '/user/take-exam/:id?',
      name: 'user/take-exam',
      component: () => import('@/views/examinees-page/TakeExam.vue'),
      meta: {
        pageTitle: 'Take Exam',
        breadcrumb: [
          {
            text: 'Take Examination',
            active: true,
          },
        ],
        requiresAuth: true,
      },
    },
    {
      path: '/user/baseTimer',
      name: 'user/baseTimer',
      component: () => import('@/views/examinees-page/BaseTimer.vue'),
      meta: {
        pageTitle: 'Base Timer',
        breadcrumb: [
          {
            text: 'Base Timer',
            active: true,
          },
        ],
        requiresAuth: true,
      },
    },
    {
      path: '/user/history',
      name: 'user/history',
      component: () => import('@/views/examinees-page/History.vue'),
      meta: {
        pageTitle: 'History',
        breadcrumb: [
          {
            text: 'History',
            active: true,
          },
        ],
        requiresAuth: true,
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
  ],
})

// ? For splash screen
// Remove afterEach hook if you are not using splash screen
router.afterEach(() => {
  // Remove initial loading
  const appLoading = document.getElementById('loading-bg')
  if (appLoading) {
    appLoading.style.display = 'none'
  }
})
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('token') ? auth.getters.StateToken : sessionStorage.getItem('token');
  if (to.matched.some(route => route.meta.requiresAuth)) {
    if (token) {
      console.log('here');
    } else {
      if (to.name == 'user/take-exam') {
        localStorage.setItem('take_exam', JSON.stringify(to))
      }
      next({ path: '/' })
    }
  }
  next()
})

export default router
