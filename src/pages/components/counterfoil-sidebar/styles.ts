import { css } from '@emotion/css';

export const useStyles = () => {
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
    `
  };
};
