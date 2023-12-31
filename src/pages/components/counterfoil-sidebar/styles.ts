import { css } from '@emotion/css';
import { theme } from 'antd';

export const useStyles = () => {
  const { useToken } = theme;
  const { token } = useToken();

  return {
    counterfoilSidebar: css`
      height: 100%;
      overflow: auto;
      position: relative;
      h5.ant-typography {
        margin: 8px 0;
      }
    `,
    exportPanel: css`
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      background: #fff;
    `,
    imageBtnModal: css`
      .ant-upload-text {
        color: ${token.colorTextDescription} !important;
        font-size: 14px !important;
      }
    `,
    imageList: css`
      max-height: 300px;
      overflow: auto;
      .image-item {
        overflow: hidden;
        cursor: pointer;
        border-radius: 8px;
        border: 1px solid #fff;
        margin-bottom: 12px;
        .image-checkbox {
          position: absolute;
          top: 0;
          right: 2px;
        }
        &.image-item--selected {
          border-color: ${token.colorPrimary};
        }
        &:hover .image-close-btn {
          opacity: 1;
        }
      }
      .image-info {
        padding: 6px;
      }
      .image-panel {
        position: relative;
        img {
          display: block;
        }
        .image-close-btn {
          position: absolute;
          right: 4px;
          bottom: 4px;
          opacity: 0;
          transition: opacity 0.2s;
        }
      }
      .image-date {
        font-size: 12px;
        color: ${token.colorTextDescription};
      }
    `,
  };
};
