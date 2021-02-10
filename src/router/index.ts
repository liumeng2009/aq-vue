import type { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { basicRoutes } from './routes/index';
import { createGuard } from './guard';

console.log(basicRoutes);

const router = createRouter({
  history: createWebHistory(process.env.VUE_APP_PUBLIC_PATH),
  routes: basicRoutes as RouteRecordRaw[],
  strict: true,
});

console.log(router.getRoutes());

export function setupRouter(app: App<Element>) {
  app.use(router);
  createGuard(router);
}

export default router;
