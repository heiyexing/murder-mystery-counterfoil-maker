import { PosterConfig } from '@/types';

export const DEFAULT_POSTER_CONFIG: PosterConfig = {
  width: 428,
  height: 926,
  posterImg: '',
  title: '',
  role: '',
  username: '',
  time: '',
  roleImg: '',
  mainColor: '#000',
};

export const TIME_FORMAT = 'YYYY-MM-DD';

export const FONT_LIST = [
  {
    fontName: 'title-font',
    fontUrl: '/murder-mystery-counterfoil-maker/font/title-font.ttf',
  },
  {
    fontName: 'value-font',
    fontUrl: '/murder-mystery-counterfoil-maker/font/value-font.ttf',
  },
];

export const MASK_EXPAND_HEIGHT = 50;