import { defineConfig } from '@umijs/max';

export default defineConfig({
  model: {},
  routes: [{ path: '/', component: 'index' }],
  npmClient: 'yarn',
  base: '/murder-mystery-counterfoil-maker',
  publicPath: '/murder-mystery-counterfoil-maker/',
});
