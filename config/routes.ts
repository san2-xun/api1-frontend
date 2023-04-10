export default [
  { name: '主页', path: '/', icon: 'smile', component: './Index' },
  { name: '接口查看', path: '/interface_info/:id', icon: 'smile', component: './InterfaceInfo', hideInMenu: true },
  { name: '登录', path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  // { name: '欢迎', path: '/welcome', icon: 'smile', component: './Index' },
  {
    name: '管理页',
    path: '/admin',
    icon: 'crown',
    access: 'canAdmin',
    routes: [
      // { path: '/admin', redirect: '/admin/sub-page' },
      // { path: '/admin/sub-page', component: './Admin' },
      { name:'接口管理', icon: 'table', path: '/admin/interface_info', component: './Admin/InterfaceInfo' },
    ],
  },
  // { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
