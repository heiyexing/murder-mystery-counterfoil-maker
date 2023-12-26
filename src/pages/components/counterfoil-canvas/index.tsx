import { useMount, useSize, useUpdate, useUpdateEffect } from 'ahooks';
import React, { useEffect, useRef, useState } from 'react';
import { CanvasEvent, Canvas } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import Background from './background';
import { CanvasContext } from './use-canvas-context';
import { Canvas as ReactCanvas } from '@antv/react-g';

const renderer = new Renderer();

const CounterfoilCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const size = useSize(containerRef) ?? { width: 0, height: 0 };
  const [render, setRender] = useState<Renderer>(() => new Renderer());
  const [canvas, setCanvas] = useState<Canvas>();
  const rendererRef = useRef<Renderer>(renderer);
  const ref = useRef();

  useEffect(() => {
    if (!size) {
      return;
    }

    // // 创建画布
    // const newCanvas = new Canvas({
    //   container: 'container', // 画布 DOM 容器 id
    //   width: size.width, // 画布宽度
    //   height: size.height, // 画布高度
    //   renderer: newRender, // 指定渲染器
    // });

    // newCanvas.addEventListener(
    //   CanvasEvent.READY,
    //   () => {
    //     setRender(newRender);
    //     setCanvas(newCanvas);
    //   },
    //   {
    //     once: true,
    //   },
    // );
  }, [size]);

  //   useUpdateEffect(() => {
  //     if (size && canvas) {
  //       canvas.resize(size.width, size.height);
  //     }
  //   }, [size]);

  return (
    <div style={{ width: '100%', height: '100%' }} id="container" ref={containerRef}>
      <ReactCanvas width={size?.width} height={size?.height} renderer={rendererRef.current}>
        <CanvasContext.Provider
          value={{
            canvas: undefined,
            render: undefined,
            size,
            config: {
              width: 428,
              height: 926,
              scale: 1,
              posterImg:
                'https://mdn.alipayobjects.com/huamei_baaa7a/afts/img/A*h6p8S76U58IAAAAAAAAAAAAADqSCAQ/original',
              title: '观白觉喜',
              role: '傻子',
              username: '洛琰',
              time: '2023-12-22',
              roleImg: '',
            },
          }}
        >
          <Background />
        </CanvasContext.Provider>
      </ReactCanvas>
    </div>
  );
};

export default CounterfoilCanvas;
