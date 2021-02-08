import { createApp } from 'vue';
import App from './App.vue';
import { setupStore } from './store';
import { setupRouter } from './router';

import '@/design/index.less';

const app = createApp(App);

setupStore(app);
setupRouter(app);

app.mount('#app');
