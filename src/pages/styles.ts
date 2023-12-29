import { css } from '@emotion/css';
import { theme } from 'antd';

export const useStyles = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const leftPanelWidth = '300px';
  return {
    homePage: css`
      height: 100vh;
      overflow: hidden;
    `,
    sidePanel: css`
      width: ${leftPanelWidth};
      box-shadow: ${token.boxShadow};
      position: relative;
    `,
    content: css`
      width: calc(100% - ${leftPanelWidth});
      background: ${token.colorBgLayout};
    `,
  };
};
