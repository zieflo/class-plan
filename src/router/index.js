import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Plans from '@/components/Plans'
import Class from '@/components/Class'
import Account from '@/components/Account'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/plans',
      name: 'Plans',
      component: Plans,
    },
    {
      path: '/classes',
      name: 'Class',
      component: Class,
    },
    {
      path: '/account',
      name: 'Account',
      component: Account,
    }
  ]
})

// const routes = [
//   {
//     path: '/plans',
//     name: 'PLans',
//     component: Plans,
//     alias: '/'
//   },
//   {
//     path: '/login',
//     name: 'LoginPage',
//     component: LoginPage,
//     meta: {
//       isAuthRequired: false
//     }
//   },
// ]

// const router = new Router({
//   mode: 'history',
//   routes
// })

// export default router
