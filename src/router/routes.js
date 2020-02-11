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

// 后台路由中中，前台管理页面的子路由
const clientManagerRoutes = [
  {
    path: '',
    redirect: 'notice'
  },
  // 公告发布
  {
    path: 'notice',
    component: () => import('@/views/admin/clientmanager/notice/index'),
    meta: {
      activeIndex: 'clientmanager' // 用来保持elementUI中menus高亮
    },
    children: [
      // 公告详情页面
      {
        path: 'content',
        props: route => ({ query: route.query.q }), // 路由传参
        component: () =>
          import('@/views/admin/clientmanager/notice/NoticeContent')
      }
    ]
  }
];

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
    children: clientManagerRoutes
  },
  // 审核列表
  {
    path: 'examinelist',
    meta: {
      activeIndex: 'examinelist',
      authRequired: true
    },
    component: () => import('@/views/admin/examinelist/index')
  }
];
