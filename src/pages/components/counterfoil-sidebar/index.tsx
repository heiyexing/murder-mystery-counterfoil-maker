import { PosterConfig } from '@/types';
import { useStyles } from './styles';
import { Button, Card, ColorPicker, DatePicker, Divider, Form, Input, Typography, Upload } from 'antd';
import { TIME_FORMAT } from '@/constants';
import dayjs from 'dayjs';
import { ExportOutlined } from '@ant-design/icons';
import ExportBtn from './export-btn';
import { useModel } from '@umijs/max';

export type CounterfoilSidebarProps = {};

const CounterfoilSidebar: React.FC<CounterfoilSidebarProps> = () => {
  const styles = useStyles();
  const [form] = Form.useForm<PosterConfig>();
  const { config, setConfig } = useModel('canvas');

  return (
    <>
      <Card className={styles.counterfoilSidebar}>
        <Form
          form={form}
          initialValues={{
            ...config,
            time: dayjs(config.time, TIME_FORMAT),
          }}
          labelAlign="left"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
          onValuesChange={(changedValues, newConfig) => {
            setConfig({
              ...config,
              ...newConfig,
              time: dayjs(newConfig.time).format(TIME_FORMAT),
            });
          }}
        >
          <Form.Item label="主题色" name="mainColor" getValueFromEvent={(_, color) => color}>
            <ColorPicker />
          </Form.Item>
          <Divider />
          <Form.Item label="剧本" name="title">
            <Input placeholder="请输入剧本名称" />
          </Form.Item>
          <Form.Item label="角色" name="role">
            <Input placeholder="请输入角色名" />
          </Form.Item>
          <Form.Item label="姓名" name="username">
            <Input placeholder="请输入姓名" />
          </Form.Item>
          <Form.Item label="日期" name="time">
            <DatePicker allowClear={false} style={{ width: '100%' }} />
          </Form.Item>
        </Form>
      </Card>

      <div className={styles.exportPanel}>
        <div style={{ margin: 8 }}>
          <ExportBtn />
        </div>
      </div>
    </>
  );
};

export default CounterfoilSidebar;
