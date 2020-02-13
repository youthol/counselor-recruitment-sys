import { clientManagerRoutes } from './clientmanager';

// 后台路由
export const adminRoutes = [
  {
    path: '',
    meta: {
      title: '后台',
      authRequired: false
    },
    component: () => import('@/views/admin/index')
  },
  // 前台管理
  {
    path: 'clientmanager',
    meta: {
      mainMenuActiveIndex: 'clientmanager', // 在嵌套子路由下，用来保持elementUI中menus高亮
      authRequired: true
    },
    component: () => import('@/views/admin/clientmanager/index'),
    children: clientManagerRoutes
  },
  // 审核列表
  {
    path: 'examinelist',
    meta: {
      authRequired: true
    },
    component: () => import('@/views/admin/examinelist/index')
  }
];
