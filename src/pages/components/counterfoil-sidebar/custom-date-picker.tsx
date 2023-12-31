import { TIME_FORMAT } from '@/constants';
import { DatePicker } from 'antd';
import dayjs from 'dayjs';
import { useState } from 'react';

export type CustomDatePickerProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ value, onChange }) => {
  const [date, setDate] = useState(() => dayjs(value, TIME_FORMAT));

  return (
    <DatePicker
      allowClear={false}
      style={{ width: '100%' }}
      value={date}
      onChange={(date) => {
        setDate(date!);
        onChange?.(dayjs(date).format(TIME_FORMAT));
      }}
    />
  );
};

export default CustomDatePicker;
