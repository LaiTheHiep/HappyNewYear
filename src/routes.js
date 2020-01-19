import React from 'react';

const Home = React.lazy(() => import('./HPNY/Home'));

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Home },
];

export default routes;
