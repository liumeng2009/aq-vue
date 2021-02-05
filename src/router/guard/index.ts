import { Router } from 'vue-router';

import { createProgressGuard } from './progressGuard';
import { createMessageGuard } from './messageGuard';
import { createTitleGuard } from './titleGuard';

export function createGuard(router: Router) {
  createProgressGuard(router);
  createTitleGuard(router);
  createMessageGuard(router);
}