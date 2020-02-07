import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import store from '../store';
import { routes, adminRoutes } from './routes';
import types from '../store/mutation-types';

const { SET_LOGIN } = types;

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: Index,
      redirect: '/home'
    },
    {
      path: '/',
      component: Index,
      children: [
        ...routes // all of routes
      ],
      redirect: '/home',
      beforeEnter: (to, from, next) => {
        if (to.matched.some(record => record.meta.authRequired)) {
          if (store.state.login.loginType === 'client') {
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
      }
    },
    {
      path: '/admin',
      component: Index,
      children: [
        ...adminRoutes // all of routes
      ],
      beforeEnter: (to, from, next) => {
        if (to.matched.some(record => record.meta.authRequired)) {
          if (store.state.login.loginType === 'admin') {
            next();
          } else {
            next({
              path: '/admin',
              query: { redirect: to.fullPath }
            });
          }
        } else {
          next();
        }
      }
    }
  ]
});

// 恢复登陆状态
if (localStorage.getItem('login')) {
  store.commit(`login/${SET_LOGIN}`, JSON.parse(localStorage.getItem('login')));
}

// FIXME: 检查登录后未区分是前台还是后台
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (store.state.login.isLogin) {
      next();
    } else {
      const pattern = /^\/admin/;
      if (pattern.test(to.fullPath)) {
        next({
          path: '/admin',
          query: { redirect: to.fullPath }
        });
      } else {
        next({
          path: '/home',
          query: { redirect: to.fullPath }
        });
      }
    }
  } else {
    next();
  }
});

export default router;
