import type { App } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { BasicRoute } from './routes';
import { createGuard } from './guard';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: BasicRoute as RouteRecordRaw[],
  strict: true
});

export function setupRouter(app: App<Element>) {
  app.use(router);
  createGuard(router)
}

export default router;
