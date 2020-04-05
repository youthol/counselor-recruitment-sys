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
      authRequired: true
    },
    component: () => import('@/views/admin/clientmanager/index'),
    redirect: 'clientmanager/notice',
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
