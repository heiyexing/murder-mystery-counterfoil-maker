import { useSize } from 'ahooks';
import React, { useRef } from 'react';
import { Renderer } from '@antv/g-canvas';
import Background from './background';
import { CanvasContext } from './use-canvas-context';
import { Group, Canvas as ReactCanvas } from '@antv/react-g';
import { PosterConfig } from '@/types';
import Panel from './panel';

const renderer = new Renderer();

export type CounterfoilCanvasProps = {
  config: PosterConfig;
};

const CounterfoilCanvas: React.FC<CounterfoilCanvasProps> = ({ config }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const size = useSize(containerRef) ?? { width: 0, height: 0 };
  const rendererRef = useRef<Renderer>(renderer);

  return (
    <div style={{ width: '100%', height: '100%' }} id="container" ref={containerRef}>
      <ReactCanvas width={size?.width} height={size?.height} renderer={rendererRef.current}>
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
      </ReactCanvas>
    </div>
  );
};

export default CounterfoilCanvas;
