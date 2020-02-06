export const routes = [
  {
    path: 'home',
    name: 'home',
    meta: {
      title: '首页',
      authRequired: false
    },
    component: () => import('@/views/client/home/index') // 动态引入
  },
  {
    path: 'notice',
    name: 'notice',
    meta: {
      title: '通知公告',
      authRequired: true
    },
    props: route => ({ query: route.query.q }), // 路由传参
    component: () => import('@/views/client/notice/index')
  },
  {
    path: 'baseinfo',
    name: 'baseinfo',
    meta: {
      title: '个人信息',
      authRequired: true
    },
    component: () => import('@/views/client/baseinfo/index')
  },
  {
    path: 'submit',
    name: 'submit',
    meta: {
      title: '审核状态',
      authRequired: true
    },
    component: () => import('@/views/client/submit/index')
  },
  {
    path: 'download',
    name: 'download',
    meta: {
      title: '材料下载',
      authRequired: true
    },
    component: () => import('@/views/client/download/index')
  },
  {
    path: 'about',
    name: 'about',
    meta: {
      title: '关于我们'
    },
    component: () => import('@/views/client/about/index')
  }
];

export const adminRoutes = [
  {
    path: '',
    meta: {
      title: '后台',
      authRequired: false
    },
    component: () => import('@/views/admin/index')
  },
  {
    path: 'clientmanager',
    name: 'clientmanager',
    meta: {
      title: '前台管理',
      authRequired: true
    },
    component: () => import('@/views/admin/clientmanager/index')
  },
  {
    path: 'examinelist',
    name: 'examinelist',
    meta: {
      title: '审核列表',
      authRequired: true
    },
    component: () => import('@/views/admin/examinelist/index')
  }
];
