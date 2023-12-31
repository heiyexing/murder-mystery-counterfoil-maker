import { Rect, Text, Image, Group } from '@antv/react-g';
import { Rect as G_Rect } from '@antv/g';
import { useMemo } from 'react';
import LabelText from './label-text';
import React from 'react';
import { PosterConfig } from '@/types';

const PANEL_MARGIN = 27;
const PANEL_PADDING = 20;
const CARD_HEIGHT = 336;
const ROLE_IMG_WIDTH = 170;
const ROLE_IMG_HEIGHT = 243;

const LABEL_LINE_HEIGHT = 20;
const VALUE_LINE_HEIGHT = 34;
const LABEL_SPLIT = 4;
const ITEM_SPLIT = 20;

const Panel: React.FC<{ config: PosterConfig }> = ({ config }) => {
  const { width, height, title, role, username, time, roleImg, mainColor } = config;

  const containerX = PANEL_MARGIN;
  const containerY = height - CARD_HEIGHT - PANEL_MARGIN;
  const conatinerWidth = width - PANEL_MARGIN * 2;

  const roleImgX = containerX + conatinerWidth - ROLE_IMG_WIDTH - PANEL_PADDING;
  const roleImgY = containerY + PANEL_PADDING;

  const roleImgClipRect = useMemo(() => {
    return new G_Rect({
      style: {
        x: roleImgX,
        y: roleImgY,
        width: ROLE_IMG_WIDTH,
        height: ROLE_IMG_HEIGHT,
        radius: 8,
      },
    });
  }, [ROLE_IMG_WIDTH, ROLE_IMG_HEIGHT, roleImgX, roleImgY]);

  const roleImgProps = useMemo(() => {
    return {
      x: roleImgX,
      y: roleImgY,
      width: ROLE_IMG_WIDTH,
      height: ROLE_IMG_HEIGHT,
    };
  }, [roleImgX, roleImgY, ROLE_IMG_WIDTH, ROLE_IMG_HEIGHT]);

  const items = [
    {
      label: '剧本',
      value: title,
    },
    {
      label: '角色',
      value: role,
    },
    {
      label: '姓名',
      value: username,
    },
    {
      label: '时间',
      value: time,
    },
  ];

  return (
    <>
      <Group>
        <Rect
          width={conatinerWidth}
          height={CARD_HEIGHT}
          x={containerX}
          y={containerY}
          fill={'#fff'}
          radius={8}
          opacity={0.9}
        />
        {roleImg && <Image img={roleImg} clipPath={roleImgClipRect} {...roleImgProps} />}
        <Group>
          {items.map((item, index) => {
            const offset = {
              x: containerX + PANEL_PADDING,
              y: containerY + PANEL_PADDING,
            };
            return (
              <React.Fragment key={item.label}>
                <LabelText
                  text={item.label}
                  x={offset.x}
                  y={
                    offset.y + LABEL_LINE_HEIGHT * (index + 1) + (LABEL_SPLIT + VALUE_LINE_HEIGHT + ITEM_SPLIT) * index
                  }
                  fontFamily="title-font"
                  fill={mainColor}
                />

                <Text
                  text={item.value}
                  x={offset.x}
                  y={
                    offset.y +
                    (LABEL_LINE_HEIGHT + LABEL_SPLIT) * (index + 1) +
                    (VALUE_LINE_HEIGHT + ITEM_SPLIT) * index
                  }
                  fontFamily="value-font"
                  fontSize={VALUE_LINE_HEIGHT}
                  textBaseline="top"
                />
              </React.Fragment>
            );
          })}
        </Group>
      </Group>
    </>
  );
};

export default Panel;
