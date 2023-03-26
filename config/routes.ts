export default [
  { name: '登录', path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { name: '欢迎', path: '/welcome', icon: 'smile', component: './Welcome' },
  {
    name: '管理页',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/sub-page', component: './Admin' },
    ],
  },
  { icon: 'table', path: '/list', component: './TableList', name: '查询表格' },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
