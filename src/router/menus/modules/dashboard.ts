import type { MenuModule } from '@/router/types';

const menu: MenuModule = {
  orderNo: 10,
  menu: {
    name: '欢迎',
    path: '/dashboard',
    children: [
      {
        path: 'workbench',
        name: '工作台',
      },
      {
        path: 'analysis',
        name: '分析页',
      },
    ],
  },
};
export default menu;
