import { FONT_LIST } from '@/constants';

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
