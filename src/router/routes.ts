import type { AppRouteRecordRaw } from '@/router/types';

const LAYOUT = () => import('@/layouts/default/index.vue');

const BasicRoute: AppRouteRecordRaw[] = [
  {
    path: '/',
    name: 'Root',
    redirect: '/home',
    meta: {
      title: 'Root',
    },
  },
  {
    path: '/home',
    name: 'Home',
    redirect: '/home/welcome',
    component: LAYOUT,
    meta: {
      title: '首页',
    },
    children: [
      {
        path: 'welcome',
        name: 'Welcome',
        component: () => import('@/views/dashboard/welcome/index.vue'),
        meta: {
          title: '首页',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/user/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
];

export { BasicRoute };
