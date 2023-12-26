import { Canvas } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import { createContext, useContext, useMemo } from 'react';

type PosterConfig = {
  width: number;
  height: number;
  scale: number;
  posterImg: string;
  title: string;
  role: string;
  username: string;
  time: string;
  roleImg: string;
};

type CanvasContextType = {
  render: Renderer | undefined;
  canvas: Canvas | undefined;
  size: { width: number; height: number };
  config: PosterConfig;
};

export const CanvasContext = createContext<CanvasContextType>({
  render: undefined,
  canvas: undefined,
  size: { width: 0, height: 0 },
  config: {
    width: 0,
    height: 0,
    scale: 0,
    posterImg: '',
    title: '',
    role: '',
    username: '',
    time: '',
    roleImg: '',
  },
});

export const useCanvasContext = () => {
  const contextValue = useContext(CanvasContext);
  const { size, config } = contextValue;

  const offset = useMemo(() => {
    return {
      x: (size.width - config.width) / 2,
      y: (size.height - config.height) / 2,
    };
  }, [size, config.width, config.height]);

  return {
    offset,
    ...contextValue,
  };
};
