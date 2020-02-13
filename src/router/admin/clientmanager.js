export const clientManagerRoutes = [
  // 公告发布
  {
    path: '',
    component: () => import('@/views/admin/clientmanager/notice/index'),
    redirect: 'notice',
    children: [
      {
        path: 'notice', // 公告列表
        component: () =>
          import('@/views/admin/clientmanager/notice/NoticeTable')
      },
      {
        path: 'editor', // 公告编辑器
        props: route => ({ query: route.query.q }), // 路由传参
        component: () =>
          import('@/views/admin/clientmanager/notice/NoticeEditor')
      },
      {
        path: 'content', // 公告详情
        props: route => ({ query: route.query.q }),
        component: () =>
          import('@/views/admin/clientmanager/notice/NoticeContent')
      }
    ]
  }
];
