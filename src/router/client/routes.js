// 前台路由
export const routes = [
  {
    path: '',
    meta: {
      title: '登录',
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
    component: () => import('@/views/client/notice/index'),
    children: [
      // 公告详情页面
      {
        path: 'content',
        props: route => ({ query: route.query.q }) // 路由传参
      }
    ]
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
