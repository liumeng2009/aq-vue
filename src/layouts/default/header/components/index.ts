import { createAsyncComponent } from '@/utils/factory/createAsyncComponent';

export const UserDropDown = createAsyncComponent(() => import('./user-dropdown/index.vue'), {
  loading: true,
});

export const FullScreen = createAsyncComponent(() => import('./FullScreen.vue'));

export const Notify = createAsyncComponent(() => import('./notify/index.vue'));
