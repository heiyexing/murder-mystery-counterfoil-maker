import type { Canvas } from '@antv/g';
import '@umijs/max/typings';

declare global {
  interface Window {
    __g_instances__: Canvas[];
  }
}
