import { PosterConfig } from '@/types';
import { useModel } from '@umijs/max';
import { ColorPicker, Divider, Form, Input } from 'antd';
import CustomDatePicker from './custom-date-picker';
import ImageBtn from './image-btn';
import { useEffect } from 'react';
import { useRequest } from 'ahooks';
import { getMainColor } from '@/utils';

const NormalForm: React.FC = () => {
  const [form] = Form.useForm<PosterConfig>();
  const { config, setConfig } = useModel('canvas');
  const posterImg = Form.useWatch('posterImg', form);

  const { data: posterImgColors = [] } = useRequest(
    () => {
      if (!posterImg) {
        return Promise.resolve([]);
      }
      return getMainColor(posterImg);
    },
    {
      refreshDeps: [posterImg],
    },
  );

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
      <Form.Item label="剧本海报" name="posterImg">
        <ImageBtn />
      </Form.Item>
      <Form.Item label="主题色" name="mainColor" getValueFromEvent={(_, color) => color}>
        <ColorPicker
          presets={[
            {
              label: '剧本海报颜色',
              colors: posterImgColors,
            },
          ]}
        />
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
        <CustomDatePicker />
      </Form.Item>
      <Form.Item label="角色封面" name="roleImg">
        <ImageBtn />
      </Form.Item>
    </Form>
  );
};

export default NormalForm;
