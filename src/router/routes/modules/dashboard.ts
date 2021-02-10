import type { AppRouteModule } from '@/router/types';
import { getParentLayout } from '@/router/constant';

const dashboard: AppRouteModule = {
  path: '/dashboard',
  name: 'Dashboard',
  redirect: '/dashboard/workbench',
  component: getParentLayout('dashboard'),
  meta: {
    icon: 'bx:bx-home',
    title: 'Dashboard',
  },
  children: [
    {
      path: 'workbench',
      name: 'Workbench',
      component: () => import('@/views/dashboard/workbench/index.vue'),
      meta: {
        title: '工作台',
      },
    },
    {
      path: 'analysis',
      name: 'Analysis',
      component: () => import('@/views/dashboard/analysis/index.vue'),
      meta: {
        title: '分析页',
      },
    },
  ],
};

export default dashboard;
