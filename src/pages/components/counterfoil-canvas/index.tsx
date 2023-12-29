import { useSize } from 'ahooks';
import React, { useEffect, useRef } from 'react';
import { Renderer } from '@antv/g-canvas';
import Background from './background';
import { CanvasContext } from './use-canvas-context';
import { Group, Canvas } from '@antv/react-g';
import { PosterConfig } from '@/types';
import Panel from './panel';
import { useModel } from '@umijs/max';

const renderer = new Renderer();

export type CounterfoilCanvasProps = {};

const CounterfoilCanvas: React.FC<CounterfoilCanvasProps> = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const size = useSize(containerRef) ?? { width: 0, height: 0 };
  const rendererRef = useRef<Renderer>(renderer);
  const canvasRef = useRef<any>(null);
  const { config, setCanvas } = useModel('canvas');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      window.__g_instances__ = [canvas];
      setCanvas(canvas);
    }
  }, [canvasRef.current]);

  return (
    <div style={{ width: '100%', height: '100%' }} id="container" ref={containerRef}>
      <Canvas width={size?.width} height={size?.height} renderer={rendererRef.current} ref={canvasRef}>
        <CanvasContext.Provider
          value={{
            canvas: undefined,
            render: undefined,
            size,
            config,
          }}
        >
          <Group transform="scale(0.8)">
            <Background />
            <Panel />
          </Group>
        </CanvasContext.Provider>
      </Canvas>
    </div>
  );
};

export default CounterfoilCanvas;
