import { Rect, Text, Image } from '@antv/react-g';
import { useCanvasContext } from './use-canvas-context';

const PANEL_MARGIN = 32;
const PANEL_PADDING = 16;
const CARD_HEIGHT = 310;
const ROLE_IMG_WIDTH = 100;
const ROLE_IMG_HEIGHT = 200;

const Panel: React.FC = () => {
  const { offset, config } = useCanvasContext();
  const { width, height, title, role, username, time, roleImg } = config;

  const containerX = offset.x + PANEL_MARGIN;
  const containerY = offset.y + height - CARD_HEIGHT - PANEL_MARGIN;
  const conatinerWidth = width - PANEL_MARGIN * 2;

  return (
    <>
      <Rect
        width={conatinerWidth}
        height={CARD_HEIGHT}
        x={containerX}
        y={containerY}
        fill={'#fff'}
        radius={8}
        opacity={0.9}
      />

      <Text text={title} x={containerX + PANEL_PADDING} y={containerY + PANEL_PADDING} textBaseline="top" />

      {roleImg && (
        <Image
          img={roleImg}
          x={containerX + conatinerWidth - ROLE_IMG_WIDTH - PANEL_PADDING}
          y={containerY + PANEL_PADDING}
          width={ROLE_IMG_WIDTH}
          height={ROLE_IMG_HEIGHT}
        />
      )}
    </>
  );
};

export default Panel;
