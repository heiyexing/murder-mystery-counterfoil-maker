import { PosterMarkColor } from '@/types';
import { useMemo, useRef } from 'react';
import { useStyles } from './styles';
import { ColorPicker, ColorPickerProps } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';
import { useSize } from 'ahooks';
import { cloneDeep } from 'lodash-es';

export type GradationColorPicker = {
  value?: PosterMarkColor[];
  onChange?: (value: PosterMarkColor[]) => void;
} & Omit<ColorPickerProps, 'value' | 'onChange'>;

const GradationColorPicker: React.FC<GradationColorPicker> = ({ value, onChange, ...props }) => {
  const styles = useStyles();
  const backgroundColor = useMemo(() => {
    return `linear-gradient(to right, ${value?.map((item) => `${item.color} ${item.percent * 100}%`).join(', ')})`;
  }, [value]);
  const blankRef = useRef<HTMLDivElement>(null);
  const blankSize = useSize(blankRef.current);

  return (
    <div className={styles.gradationColorPicker}>
      <div className="color-blank" ref={blankRef} style={{ background: backgroundColor }}></div>
      {value?.map((item, index) => {
        return (
          <div className="color-item" key={item.id} style={{ left: item.percent * (blankSize?.width ?? 0) + 'px' }}>
            <CaretUpOutlined />
            <ColorPicker
              value={item.color}
              onChange={(_, newColor) => {
                const newColors = cloneDeep(value);
                newColors[index].color = newColor;
                onChange?.(newColors);
              }}
              size="small"
              {...props}
            />
          </div>
        );
      })}
    </div>
  );
};

export default GradationColorPicker;
