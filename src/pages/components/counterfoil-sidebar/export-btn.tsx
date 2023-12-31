import { ExportOutlined } from '@ant-design/icons';
import { Rectangle } from '@antv/g';
import { useModel } from '@umijs/max';
import { Button, message } from 'antd';
import { useState } from 'react';

const ExportBtn: React.FC = () => {
  const { exportor, config } = useModel('canvas');
  const [loading, setLoading] = useState(false);

  const onExport = async () => {
    if (!exportor) {
      message.warning('画布未初始化完成');
      return;
    }
    setLoading(true);
    const clipCanvas = await exportor.toCanvas({
      clippingRegion: new Rectangle(0, 0, config.width, config.height),
    });
    const dataURL = clipCanvas.toDataURL();
    exportor.downloadImage({
      dataURL,
      name: `${config.role}`,
    });
    setLoading(false);
    message.success(`${config.role}.png 导出成功`);
  };

  return (
    <Button block type="primary" icon={<ExportOutlined />} onClick={onExport} loading={loading}>
      导出
    </Button>
  );
};

export default ExportBtn;
