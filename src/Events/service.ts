import _ from 'lodash';
const uuidv1 = require('uuid/v1');
import { Event } from "../models";

const _getData = (): Event[] => JSON.parse(localStorage.getItem('events') || "[]");
const _setData = (data: Event[]) => localStorage.setItem('events', JSON.stringify(data));

export const getAll = (query: any = {search: ''}): Promise<any> => {
  let data = (query.search === '') ? _getData()
      : _.filter(_getData(), (o: Event) => (o.name.toLowerCase().search(query.search.toLowerCase()) > -1));
//  if (query.filters && query.filters[0] && query.filters[0].value && query.filters[0].value.length) {
//    data = _.filter(data, (o: Event) => (_.intersection(o.genres, query.filters[0].value).length > 0));
//  }
  return Promise.resolve({ data: data });
};

export const addItem = (item: Event): Promise<any> => {
  if (!item.date || item.date === '' ||
      !item.name || item.name === '' || 
      !item.placeId || item.placeId === '' ||
      !item.impresarioId || item.impresarioId === '' ||
      !item.actorsId || item.actorsId.length === 0 
  ) return Promise.reject(false);
  let data = _getData();
  item.id = uuidv1();
  item.desc = item.desc || '';
  data.push(item);
  _setData(data);
  return Promise.resolve(true);
};

export const updateItem = (item: Event): Promise<any> => {
  let data = _getData();
  let record = _.find(data, { id: item.id });
  if (record === undefined ||
      !item.date || item.date === '' ||
      !item.name || item.name === '' || 
      !item.placeId || item.placeId === '' ||
      !item.impresarioId || item.impresarioId === '' ||
      !item.actorsId || item.actorsId.length === 0
  ) return Promise.reject(false);
  deleteItem(record);
  data = _getData();
  data.push(item);
  _setData(data);
  return Promise.resolve(true);
};

export const deleteItem = (item: Event): Promise<any> => {
  _setData(_.reject(_getData(), { id: item.id }));
  return Promise.resolve(true);
};