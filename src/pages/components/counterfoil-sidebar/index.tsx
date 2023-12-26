import { PosterConfig } from '@/types';
import { useStyles } from './styles';
import { DatePicker, Form, Input } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

export type CounterfoilSidebarProps = {
  config: PosterConfig;
  setConfig: (config: PosterConfig) => void;
};

const CounterfoilSidebar: React.FC<CounterfoilSidebarProps> = ({ config, setConfig }) => {
  const styles = useStyles();
  const [form] = Form.useForm<PosterConfig>();

  return (
    <div className={styles.counterfoilSidebar}>
      <Form
        form={form}
        initialValues={config}
        labelAlign="left"
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        onValuesChange={(changedValues, newConfig) => {
          setConfig(newConfig);
        }}
      >
        <Form.Item label="剧本名" name="title">
          <Input placeholder="请输入剧本名称" />
        </Form.Item>
        <Form.Item label="角色" name="role">
          <Input placeholder="请输入角色名" />
        </Form.Item>
        <Form.Item label="姓名" name="username">
          <Input placeholder="请输入姓名" />
        </Form.Item>
        {/* <Form.Item label="日期" name="time" >
          <DatePicker locale={locale} format={TIME_FORMAT} />
        </Form.Item> */}
      </Form>
    </div>
  );
};

export default CounterfoilSidebar;
