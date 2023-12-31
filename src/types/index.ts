export type PosterMarkColor = {
  id: string;
  color: string;
  percent: number;
};

export type PosterMark = {
  height: number;
  colors: Array<PosterMarkColor>;
};

export type PosterConfig = {
  width: number;
  height: number;
  posterImg?: string;
  title: string;
  role: string;
  username: string;
  time: string;
  roleImg?: string;
  mainColor: string;
  mask?: undefined | false | PosterMark;
};

export type HistoryImage = {
  id?: string;
  name: string;
  url: string;
  date: string;
};
