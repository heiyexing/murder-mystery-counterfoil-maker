import { PosterConfig } from '@/types';
import { useModel } from '@umijs/max';
import { Form, Input, InputNumber } from 'antd';

export type StyleFormProps = {};

const StyleForm: React.FC = () => {
  const [form] = Form.useForm<PosterConfig>();
  const { config, setConfig } = useModel('canvas');
  return (
    <Form
      form={form}
      initialValues={config}
      labelAlign="left"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      onValuesChange={(changedValues, newConfig) => {
        setConfig({
          ...config,
          ...newConfig,
        });
      }}
    >
      <p className="form-title">画布尺寸（不建议更改）</p>
      <Form.Item label="长度" name="height" tooltip="不建议更改，默认值为 926">
        <InputNumber min={1} addonAfter="px" />
      </Form.Item>

      <Form.Item label="宽度" name="width" tooltip="不建议更改，默认值为 428">
        <InputNumber min={1} addonAfter="px" />
      </Form.Item>
    </Form>
  );
};

export default StyleForm;
