import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';
import Settings from '../views/Settings.vue';

import SignUp from '../views/Register-LogIn/SignUp.vue';
import LogIn from '../views/Register-LogIn/LogIn.vue';
import Choice from '../views/Register-LogIn/Choice.vue';

import { getUserState } from '/src/firebase.js';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/choice',
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/search',
      name: 'search',
      component: Search,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: LogIn,
      meta: { requiresUnauth: true }
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp,
      meta: { requiresUnauth: true }
    },
    {
      path: '/choice',
      name: 'choice',
      component: Choice,
      meta: { requiresUnauth: true }
    },
    {
      path: '/settings',
      name: 'settings',
      component: Settings,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth)

  const isAuth = await getUserState()

  if (requiresAuth && !isAuth) {
    next('/login')
  } else if (requiresUnauth && isAuth) {
    next(false) // Prevent the navigation
  } else {
    next() // Continue with the navigation
  }
})

export default router
