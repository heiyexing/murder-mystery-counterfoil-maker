import React from 'react';
import { Text } from '@antv/react-g';

type LabelProps = Parameters<typeof Text>[0];

const LabelText: React.FC<LabelProps> = ({ text, ...props }) => {
  return (
    <>
      <Text {...props} text={String(text)[0]} fontSize={22} />

      <Text {...props} text={String(text).slice(1)} fontSize={16} x={Number(props.x) + 22} />
    </>
  );
};

LabelText.defaultProps = {
  fontFamily: '锐字工房磅礴黑简',
};

export default LabelText;
