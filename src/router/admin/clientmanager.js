export const clientManagerRoutes = [
  // 公告发布
  {
    path: 'notice',
    component: () => import('@/views/admin/clientmanager/notice/NoticeTable')
  },
  {
    path: 'notice/editor', // 公告编辑器
    props: route => ({ query: route.query.q }), // 路由传参
    component: () => import('@/views/admin/clientmanager/notice/NoticeEditor')
  },
  {
    path: 'notice/content', // 公告详情
    props: route => ({ query: route.query.q }),
    component: () => import('@/views/admin/clientmanager/notice/NoticeContent')
  },
  // 说明管理
  {
    path: 'note/baseinfo',
    component: () => import('@/views/admin/clientmanager/note/BaseInfoNote')
  },
  {
    path: 'note/submit',
    component: () => import('@/views/admin/clientmanager/note/SubmitNote')
  },
  {
    path: 'note/file',
    component: () => import('@/views/admin/clientmanager/note/FileNote')
  },
  // 资料发布
  {
    path: 'file',
    component: () => import('@/views/admin/clientmanager/file/FileList')
  }
];
