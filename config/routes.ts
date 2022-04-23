export default [
  {
    name: 'list.table-list',
    icon: 'user',
    path: '/list',
    component: './Contacts',
  },
  {
    path: '/',
    redirect: '/list',
  },
  {
    component: './404',
  },
];
