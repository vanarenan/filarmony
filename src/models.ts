export enum Genre {
  'Пісня', 
  'Музика', 
  'Танець',
  'Ляльки',
  'Комедія',
  'Постанова',
  'Монолог',
}; 

export interface Actor {
  id: string;
  name: string;
  genres: Genre[];
};

export interface Impresario {
  id: string;
  name: string;
  genres: Genre[];
};

export interface Places {
  id: string;
  name: string;
  seats: number;
};

export interface Events {
  id: string;
  date: Date;
  name: string;
  description: string;
  impresarioId: string;
  actorsId: string[];
};