import { PosterConfig } from '@/types';
import { Canvas } from '@antv/g';
import { ImageExporter } from '@antv/g-image-exporter';
import { useLocalStorageState } from 'ahooks';
import { useMemo, useState } from 'react';

const posterConfig: PosterConfig = {
  width: 428,
  height: 926,
  posterImg: 'https://mdn.alipayobjects.com/huamei_baaa7a/afts/img/A*h6p8S76U58IAAAAAAAAAAAAADqSCAQ/original',
  title: '曦和失焰',
  role: '皓月',
  username: '洛琰',
  time: '2023-12-22',
  roleImg: 'https://pic.imgdb.cn/item/658afb19c458853aefba3146.jpg',
  mainColor: '#215b67',
};

const useCanvas = () => {
  const [canvas, setCanvas] = useState<Canvas | null>(null);
  const posterConfigState = useLocalStorageState<PosterConfig>('posterConfig', {
    defaultValue: posterConfig,
  });
  const config = posterConfigState[0]!;
  const setConfig = posterConfigState[1]!;

  const exportor = useMemo(() => {
    if (!canvas) return undefined;
    return new ImageExporter({
      canvas
    });
  }, [canvas])

  return {
    canvas,
    setCanvas,
    config,
    setConfig,
    exportor,
  };
};

export default useCanvas;