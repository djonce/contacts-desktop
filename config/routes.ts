export default [
  {
    name: 'list.table-list',
    icon: 'user',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/list',
  },
  {
    component: './404',
  },
];
