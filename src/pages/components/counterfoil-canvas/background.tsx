import { PosterConfig } from '@/types';
import { Rect, Image } from '@antv/react-g';

const Background: React.FC<{ config: PosterConfig }> = ({ config }) => {
  const { width, height, posterImg } = config;

  return (
    <>
      <Rect width={width} height={height} fill={'#fff'} />
      <Image key={posterImg} img={posterImg} width={width} keepAspectRatio />
    </>
  );
};

export default Background;
