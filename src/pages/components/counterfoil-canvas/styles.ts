import { css } from '@emotion/css';

export const useStyles = () => {
  return {
    canvasContainer: css`
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: auto;
    `,
  };
};
