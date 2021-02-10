import store from '@/store';
import { getCurrentInstance, nextTick, onMounted, onUnmounted } from 'vue';

export function hotModuleUnregisterModule(name: string) {
  if (!name) return;
  if ((store.state as any)[name]) {
    store.unregisterModule(name);
  }
}

export function tryOnMounted(fn: () => void, sync = true) {
  if (getCurrentInstance()) {
    onMounted(fn);
  } else if (sync) {
    fn();
  } else {
    nextTick(fn);
  }
}

export function tryOnUnmounted(fn: () => Promise<void> | void) {
  getCurrentInstance() && onUnmounted(fn);
}
