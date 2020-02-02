const routes = [
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '首页',
      authRequired: false
    },
    component: () => import('@/views/home/index') // 动态引入
  },
  {
    path: '/notice/:id',
    name: 'notice',
    meta: {
      title: '通知公告',
      authRequired: false
    },
    component: () => import('@/views/notice/index') // 动态引入
  },
  {
    path: '/baseinfo',
    name: 'baseinfo',
    meta: {
      title: '个人信息',
      authRequired: false
    },
    component: () => import('@/views/baseinfo/index')
  },
  {
    path: '/submit',
    name: 'submit',
    meta: {
      title: '简历提交',
      authRequired: false
    },
    component: () => import('@/views/submit/index')
  },
  {
    path: '/download',
    name: 'download',
    meta: {
      title: '材料下载',
      authRequired: false
    },
    component: () => import('@/views/download/index')
  },
  {
    path: '/about',
    name: 'about',
    meta: {
      title: '关于我们'
    },
    component: () => import('@/views/about/index')
  }
];

export default routes;
