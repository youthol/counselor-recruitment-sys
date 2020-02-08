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
      redirect: '/'
    },
    {
      path: '/',
      component: Index,
      children: [
        ...routes // all of routes
      ],
      // 控制登陆的账户只能面向一端访问
      beforeEnter: (to, from, next) => {
        if (store.state.login.loginType === 'admin') {
          next({
            path: '/admin',
            query: { redirect: to.fullPath }
          });
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
        if (store.state.login.loginType === 'client') {
          next({
            path: '/',
            query: { redirect: to.fullPath }
          });
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

router.beforeEach((to, from, next) => {
  const pattern = /^\/admin/;
  // 检查是否需要验证登录
  if (to.matched.some(record => record.meta.authRequired)) {
    if (store.state.login.isLogin) {
      next();
    } else {
      // 若没有登陆
      // 则检查下一个路由面向的位置是前台还是后台
      // 然后重定向到对应的页面
      if (pattern.test(to.fullPath)) {
        next({
          path: '/admin',
          query: { redirect: to.fullPath }
        });
      } else {
        next({
          path: '/',
          query: { redirect: to.fullPath }
        });
      }
    }
  } else {
    next();
  }
});

export default router;
