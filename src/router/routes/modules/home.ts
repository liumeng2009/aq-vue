import type { AppRouteModule } from '@/router/types';

import { getParentLayout } from '@/router/constant';

const dashboard: AppRouteModule = {
  path: '/home',
  name: 'Home',
  component: getParentLayout('home'),
  redirect: '/home/welcome',
  meta: {
    icon: 'bx:bx-home',
    title: '首页',
  },
  children: [
    {
      path: 'welcome',
      name: 'Welcome',
      component: () => import('@/views/dashboard/welcome/index.vue'),
      meta: {
        title: '首页',
        affix: true,
        icon: 'bx:bx-home',
      },
    },
  ],
};

export default dashboard;
