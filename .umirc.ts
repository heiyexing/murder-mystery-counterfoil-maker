import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: '/', component: 'index' }],
  npmClient: 'yarn',
  base: '/murder-mystery-counterfoil-maker',
  publicPath: '/murder-mystery-counterfoil-maker/',
});
