import { Rect } from '@antv/react-g';
import { useCanvasContext } from './use-canvas-context';

const Background: React.FC = () => {
  const { offset, config } = useCanvasContext();
  return (
    <>
      <Rect width={config.width} height={config.height} x={offset.x} y={offset.y} fill={'#fff'} />
    </>
  );
};

export default Background;
