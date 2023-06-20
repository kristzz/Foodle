import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Search from '../views/Search.vue';

import SignUp from '../views/Register-LogIn/SignUp.vue';
import LogIn from '../views/Register-LogIn/LogIn.vue';
import Choice from '../views/Register-LogIn/Choice.vue';

import Settings from '../views/Settings.vue';
import Account from '../views/Settings/Account.vue';
import Security from '../views/Settings/Security.vue';
import Notifications from '../views/Settings/Notifications.vue';
import TermsOfService from '../views/Settings/TermsOfService.vue';
import About from '../views/Settings/About.vue'

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
    },
    {
      path: '/settings/account',
      name: 'account',
      component: Account,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/security',
      name: 'security',
      component: Security,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/notifications',
      name: 'notifications',
      component: Notifications,
      meta: { requiresAuth: true }
    },
    {
      path: '/settings/termsofservice',
      name: 'termsofservice',
      component: TermsOfService
    },
    {
      path: '/settings/about',
      name: 'about',
      component: About,
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const requiresUnauth = to.matched.some(record => record.meta.requiresUnauth)
  const path = to.path;
  const isAuth = await getUserState()

  if (requiresAuth && !isAuth) {
    next('/login')
  } else if (isAuth && (path === '/' || path === '/login' || path === '/signup' || path === '/choice')) {
    next('/home');
  } else if (requiresUnauth && isAuth) {
    next(false) // Prevent the navigation
  } else {
    next() // Continue with the navigation
  }
})

export default router
