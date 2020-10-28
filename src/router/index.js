import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('@/views/Home'),
    },
    {
      path: '/guild',
      name: 'guild',
      component: () => import("@/views/Guild")
    },
    {
      path: '/quest',
      name: 'quest',
      component: () => import("@/views/Quest")
    },
    {
      path: '/field',
      name: 'field',
      component: () => import("@/views/Field")
    },
    {
      path: '/login',
      name: 'login',
      component: () => import("@/views/Login")
    },
    {
      path: '/register',
      name: 'register',
      component: () => import("@/views/Register")
    }
  ]
})
