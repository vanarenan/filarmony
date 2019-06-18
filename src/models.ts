import _ from 'lodash';

export interface Event {
  id: string;
  date: string;
  name: string;
  desc: string;
  placeId: string;
  impresarioId: string;
  actorsId: string[];
};

export interface Place {
  id: string;
  name: string;
  desc: string;
  seats: number;
};

export interface Impresario {
  id: string;
  name: string;
  genres: Genre[];
};

export interface Actor {
  id: string;
  name: string;
  genres: Genre[];
};

export enum Genre {
  'Пісня', 
  'Музика', 
  'Танець',
  'Ляльки',
  'Комедія',
  'Постанова',
  'Монолог'
}

export const Genres = _.filter(Genre, (value) => !isNaN(Number(value)) === false);