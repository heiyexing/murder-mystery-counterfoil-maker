import { FONT_LIST } from '@/constants';
// @ts-ignore
import ColorThief from 'colorthief/dist/color-thief.mjs';

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

export const getMainColor = (img: string) => {
  return new Promise<string[]>((resolve, reject) => {
    const image = document.createElement('img');
    image.src = img;
    image.onload = () => {
      const colorThief = new ColorThief();
      resolve(colorThief.getPalette(image).map((item: number[]) => `rgb(${item.join(' ,')})`));
    };
    image.onerror = (error) => {
      reject(error);
    }
  });
};
