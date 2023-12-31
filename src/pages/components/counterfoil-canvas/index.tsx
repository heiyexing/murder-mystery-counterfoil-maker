import React, { useEffect, useRef } from 'react';
import { Renderer } from '@antv/g-canvas';
import Background from './background';
import { Canvas } from '@antv/react-g';
import Panel from './panel';
import { useModel } from '@umijs/max';
import { useStyles } from './styles';

const renderer = new Renderer();

export type CounterfoilCanvasProps = {};

const CounterfoilCanvas: React.FC<CounterfoilCanvasProps> = () => {
  const rendererRef = useRef<Renderer>(renderer);
  const canvasRef = useRef<any>(null);
  const { config, setCanvas } = useModel('canvas');
  const styles = useStyles();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      window.__g_instances__ = [canvas];
      setCanvas(canvas);
    }
  }, [canvasRef.current]);

  return (
    <div className={styles.canvasContainer} id="container">
      <Canvas width={config.width} height={config.height} renderer={rendererRef.current} ref={canvasRef}>
        <Background config={config} />
        <Panel config={config} />
      </Canvas>
    </div>
  );
};

export default CounterfoilCanvas;
