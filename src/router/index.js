import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';

import home from './home';

Vue.use(Router);

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        ...home // home router
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

export default router;
