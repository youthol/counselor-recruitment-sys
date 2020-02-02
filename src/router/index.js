import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';

import routes from './routes';

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

export default router;
