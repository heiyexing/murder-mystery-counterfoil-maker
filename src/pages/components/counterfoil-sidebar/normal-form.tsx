import { PosterConfig, PosterMark } from '@/types';
import { useModel } from '@umijs/max';
import { ColorPicker, Divider, Form, Input, InputNumber } from 'antd';
import CustomDatePicker from './custom-date-picker';
import ImageBtn from './image-btn';
import { useEffect } from 'react';
import { useRequest } from 'ahooks';
import { getImageMask, getImageSize, getMainColor } from '@/utils';
import { MASK_EXPAND_HEIGHT } from '@/constants';
import GradationColorPicker from './gradation-color-picker';

const NormalForm: React.FC = () => {
  const [form] = Form.useForm<PosterConfig>();
  const { config, setConfig } = useModel('canvas');
  const posterImg = Form.useWatch('posterImg', form);

  const { data: posterImgColorPreset = [] } = useRequest(
    async () => {
      if (!posterImg) {
        return Promise.resolve([]);
      }
      return [
        {
          label: '剧本海报拾取主要颜色',
          colors: await getMainColor(posterImg),
        },
      ];
    },
    {
      refreshDeps: [posterImg],
    },
  );

  const { data: defaultMask } = useRequest(
    async () => {
      if (!posterImg) {
        return false;
      }
      const imageSize = await getImageSize(posterImg);
      const posterRatio = config.height / config.width;
      if (imageSize.height / imageSize.width > posterRatio) {
        return false;
      }
      return await getImageMask(posterImg, config);
    },
    {
      refreshDeps: [posterImg],
      onSuccess: (mask: PosterMark | false) => {
        form.setFieldValue('mask', mask);
        setConfig({
          ...config,
          mask,
        });
      },
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
      <p className="form-title">剧本配置</p>
      <Form.Item label="剧本" name="title">
        <Input placeholder="请输入剧本名称" />
      </Form.Item>
      <Form.Item label="剧本海报" name="posterImg">
        <ImageBtn tip="长宽比建议 ≥ 926:428 " />
      </Form.Item>
      {defaultMask && (
        <>
          <Form.Item label="渐变高度" name={['mask', 'height']}>
            <InputNumber min={0} style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item label="渐变色带" name={['mask', 'colors']}>
            <GradationColorPicker presets={posterImgColorPreset} />
          </Form.Item>
        </>
      )}
      <Form.Item label="主题色" name="mainColor" getValueFromEvent={(_, color) => color}>
        <ColorPicker presets={posterImgColorPreset} />
      </Form.Item>
      <Form.Item label="时间" name="time">
        <CustomDatePicker />
      </Form.Item>
      <Divider />
      <p className="form-title">角色配置</p>
      <Form.Item label="角色" name="role">
        <Input placeholder="请输入角色名" />
      </Form.Item>
      <Form.Item label="姓名" name="username">
        <Input placeholder="请输入姓名" />
      </Form.Item>
      <Form.Item label="角色封面" name="roleImg">
        <ImageBtn />
      </Form.Item>
    </Form>
  );
};

export default NormalForm;
