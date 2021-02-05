import { setTitle } from '@/utils/browser';
import type { Router } from 'vue-router';

export function createTitleGuard(router: Router) {
  router.afterEach(async (to) => {
    setTitle(to.meta.title, process.env.AQ_APP_TITLE)
  })
}