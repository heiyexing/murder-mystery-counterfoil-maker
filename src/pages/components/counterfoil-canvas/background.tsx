import { PosterConfig } from '@/types';
import { transformMaskColors } from '@/utils';
import { Rect as GRect } from '@antv/g';
import { Rect, Image } from '@antv/react-g';
import { useUpdate, useUpdateEffect } from 'ahooks';
import { useMemo, useRef } from 'react';

const Background: React.FC<{ config: PosterConfig }> = ({ config }) => {
  const { width, height, posterImg, mask } = config;
  const rectRef = useRef<GRect | null>(null);
  const fill = useMemo(() => {
    return mask ? `l(90) ${mask.colors.map((item) => `${item.percent}:${item.color}`).join(' ')}` : '';
  }, [mask]);

  useUpdateEffect(() => {
    if (rectRef.current) {
      rectRef.current.style.fill = fill;
    }
  }, [fill]);

  return (
    <>
      <Rect width={width} height={height} fill="#fff" />
      <Image key={posterImg} img={posterImg} width={width} keepAspectRatio />
      {mask && (
        <Rect ref={rectRef} key={fill} width={width} height={mask.height} y={height - mask.height} fill={fill} />
      )}
    </>
  );
};

export default Background;
