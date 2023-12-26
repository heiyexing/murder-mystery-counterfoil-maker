import { Rect, Image } from '@antv/react-g';
import { useCanvasContext } from './use-canvas-context';

const Background: React.FC = () => {
  const { offset, config } = useCanvasContext();
  const { width, height, posterImg } = config;

  return (
    <>
      <Rect width={width} height={height} {...offset} fill={'#fff'} />
      <Image key={posterImg} img={posterImg} width={width} keepAspectRatio {...offset} />
    </>
  );
};

export default Background;
