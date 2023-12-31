import { getImageBase64 } from '@/utils';
import { DeleteOutlined, InboxOutlined } from '@ant-design/icons';
import { Alert, Button, Card, Checkbox, Col, Divider, Empty, Image, Modal, Row, Upload } from 'antd';
import type { DraggerProps } from 'antd/es/upload';
import { useState } from 'react';
import { useStyles } from './styles';
import { useMount, useUpdateEffect } from 'ahooks';
import localforage from 'localforage';
import { isEqual } from 'lodash-es';
import { HistoryImage } from '@/types';
import dayjs from 'dayjs';
import { v4 } from 'uuid';
import classNames from 'classnames';

const { Dragger } = Upload;

export type ImageBtnProps = {
  value?: string;
  onChange?: (value: string) => void;
};

const ImageBtn: React.FC<ImageBtnProps> = ({ value, onChange }) => {
  const [selectImage, setSelectImage] = useState<string | undefined>(); // 选择的图片
  const [visible, setVisible] = useState(false);
  const styles = useStyles();
  const [imageList, setImageList] = useState<HistoryImage[]>([]); // 历史上传图片

  const customRequest: DraggerProps['customRequest'] = async (options) => {
    const file = options.file as File;
    const base64 = await getImageBase64(file);
    setImageList((oldImageList) => {
      return [
        ...oldImageList,
        {
          id: v4(),
          name: file.name,
          url: base64,
          date: dayjs().format('YYYY-MM-DD HH:mm:ss'),
        },
      ];
    });
  };

  const onOk = () => {
    if (!selectImage) {
      return;
    }
    onChange?.(selectImage);
    setVisible(false);
  };

  useMount(() => {
    localforage.getItem<HistoryImage[]>('imageList').then((newImageList) => {
      setImageList(newImageList || []);
    });
  });

  useUpdateEffect(() => {
    localforage.getItem<HistoryImage[]>('imageList').then((storeImageList) => {
      if (!isEqual(storeImageList, imageList)) {
        localforage.setItem('imageList', imageList);
      }
    });
  }, [imageList]);

  return (
    <>
      <Button style={value ? { marginBottom: 12 } : undefined} onClick={() => setVisible(true)}>
        {value ? '重新选择' : '选择图片'}
      </Button>
      {value && <Image src={value} />}

      <Modal
        width="800px"
        title="选择图片"
        open={visible}
        className={styles.imageBtnModal}
        okText="确定"
        destroyOnClose
        okButtonProps={{
          disabled: !selectImage,
        }}
        maskClosable
        onOk={onOk}
        onCancel={() => setVisible(false)}
      >
        <Alert
          style={{ marginBottom: 16 }}
          message="可一次性上传剧本封面以及角色封面，再通过弹框下方的图片列表进行选择"
          closable
          type="info"
        />
        <Dragger accept="image/*" multiple customRequest={customRequest} fileList={[]}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或拖拽可批量上传图片</p>
        </Dragger>

        <Divider />

        <div className={styles.imageList}>
          {imageList.length ? (
            <Row gutter={16}>
              {imageList
                .sort((a, b) => +dayjs(b.date) - +dayjs(a.date))
                .map((item, index) => {
                  const isSelect = item.url === selectImage;
                  return (
                    <Col key={item.id ?? item.date} span={6}>
                      <div
                        className={classNames({
                          ['image-item']: true,
                          ['image-item--selected']: isSelect,
                        })}
                        onClick={() => {
                          setSelectImage(item.url);
                        }}
                      >
                        <div className="image-panel">
                          {isSelect && <Checkbox checked className="image-checkbox" />}
                          <Button
                            className="image-close-btn"
                            icon={<DeleteOutlined />}
                            onClick={(e) => {
                              e.stopPropagation();
                              setImageList((oldImageList) => {
                                const newImageList = [...oldImageList];
                                newImageList.splice(index, 1);
                                return newImageList;
                              });
                            }}
                          />
                          <img src={item.url} draggable={false} style={{ width: '100%' }} />
                        </div>
                        <div className="image-info">
                          <div>{item.name}</div>
                          <div className="image-date">{item.date}</div>
                        </div>
                      </div>
                    </Col>
                  );
                })}
            </Row>
          ) : (
            <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="无图片，请先上传" />
          )}
        </div>
      </Modal>
    </>
  );
};

export default ImageBtn;
