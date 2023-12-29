import { DEFAULT_POSTER_CONFIG } from '@/constants';
import { PosterConfig } from '@/types';
import { Canvas } from '@antv/g';
import { Renderer } from '@antv/g-canvas';
import { createContext, useContext, useMemo } from 'react';

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
  config: DEFAULT_POSTER_CONFIG,
});

export const useCanvasContext = () => {
  const contextValue = useContext(CanvasContext);
  const { size, config } = contextValue;

  const offset = useMemo(() => {
    return {
      x: 50,
      y: 50,
    };
  }, [size, config.width, config.height]);

  return {
    offset,
    ...contextValue,
  };
};
