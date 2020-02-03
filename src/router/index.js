import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';

import routes from './routes';
import store from '../store';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        ...routes // all of routes
      ],
      redirect: '/home'
    },
    {
      path: '*',
      component: Index,
      redirect: '/home'
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (store.state.login.isLogin) {
      next();
    } else {
      next({
        path: '/home',
        query: { redirect: to.fullPath }
      });
    }
  } else {
    next();
  }
});

export default router;
