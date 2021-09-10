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
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/history',
      name: 'history',
      component: () => import('@/views/History.vue'),
      meta: {
        pageTitle: 'History',
        breadcrumb: [
          {
            text: 'History',
            active: true,
          },
        ],
      },
    },
    {
      path: '/members',
      name: 'members',
      component: () => import('@/views/Members.vue'),
      meta: {
        pageTitle: 'Members',
        breadcrumb: [
          {
            text: 'Members',
            active: true,
          },
        ],
      },
    },
    {
      path: '/profile',
      name: 'profile',
      component: () => import('@/views/Profile.vue'),
      meta: {
        pageTitle: 'Profile',
        breadcrumb: [
          {
            text: 'Profile',
            active: true,
          },
        ],
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
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('@/views/Registration.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
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

export default router
