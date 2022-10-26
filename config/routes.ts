export default [
  {
    path: '/login',
    layout: false,
    component: './Login',
  },
  {
    name: 'list.table-list',
    icon: 'user',
    path: '/list',
    component: './Contacts',
  },
  {
    path: '/',
    redirect: '/login',
  },
  // {
  //   path: '/',
  //   redirect: '/list',
  // },
  {
    component: './404',
  },
];
