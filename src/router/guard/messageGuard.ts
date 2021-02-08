import type { Router } from 'vue-router';
import { Modal, notification } from 'ant-design-vue';

import { warn } from '@/utils/log';

export function createMessageGuard(router: Router) {
  router.beforeEach(async () => {
    try {
      Modal.destroyAll();
      notification.destroy();
    } catch (error) {
      warn('message guard error:' + error);
    }
    return true;
  });
}
