import { FONT_LIST, MASK_EXPAND_HEIGHT } from '@/constants';
import { PosterMark } from '@/types';
// @ts-ignore
import ColorThief from 'colorthief/dist/color-thief.mjs';
import chroma from 'chroma-js';
import { v4 } from 'uuid';

export const loadFonts = () => {
  return Promise.all(
    FONT_LIST.map((item) => {
      const font = new FontFace(item.fontName, `url(${item.fontUrl})`);
      document.fonts.add(font);
      const span = document.createElement('span');
      span.innerHTML = '';
      span.setAttribute('style', `font-family: ${item.fontName}`);
      document.body.append(span);
      return font.loaded.then(() => {});
    }),
  );
};

export const getImageBase64 = (file: File) => {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = function (e) {
      const base64 = e.target?.result;
      if (base64) {
        resolve(base64 as string);
      } else {
        reject(new Error('文件信息获取有误'));
      }
    };

    reader.onerror = function (error) {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};

export const getMainColor = (imgSrc: string, count = 10) => {
  return new Promise<string[]>((resolve, reject) => {
    const image = document.createElement('img');
    image.onload = () => {
      const colorThief = new ColorThief();
      const colors: number[][] = [];
      if (count === 1) {
        colors.push(colorThief.getColor(image));
      } else {
        colors.push(...colorThief.getPalette(image, count));
      }
      resolve(colors.map((item: number[]) => chroma(item).hex()));
    };
    image.onerror = (error) => {
      reject(error);
    };
    image.src = imgSrc;
  });
};

export const getImageSize = (imgSrc: string) => {
  return new Promise<{ width: number; height: number }>((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      const { width, height } = image;
      resolve({ width, height });
    };
    image.onerror = (error) => {
      reject(error);
    };
    image.src = imgSrc;
  });
};

export const getImageMask = (imgSrc: string, posterSize: { width: number; height: number }) => {
  return new Promise<PosterMark>(async (resolve, reject) => {
    const [color1, color2] = await getMainColor(imgSrc, 2);
    const imageSize = await getImageSize(imgSrc);
    const maskHeight = Math.ceil(
      posterSize.height - (posterSize.width / imageSize.width) * imageSize.height + MASK_EXPAND_HEIGHT,
    );
    const mask: PosterMark = {
      height: maskHeight,
      colors: [
        {
          color: chroma(color1).alpha(0).hex(),
          percent: 0,
        },
        {
          color: color1,
          percent: MASK_EXPAND_HEIGHT / maskHeight,
        },
        {
          color: color2,
          percent: 1,
        },
      ].map((item) => {
        return {
          ...item,
          id: v4(),
        };
      }),
    };
    resolve(mask);
  });
};

export const transformMaskColors = ({ colors }: PosterMark) => {
  return `l(90) ${colors.map((item) => `${item.percent}:${item.color}`).join(' ')}`;
};
