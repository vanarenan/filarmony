import _ from 'lodash';
const uuidv1 = require('uuid/v1');
import { Place } from "../models";

const _getData = (): Place[] => JSON.parse(localStorage.getItem('places') || "[]");
const _setData = (data: Place[]) => localStorage.setItem('places', JSON.stringify(data));

export const getAll = (query: any = {search: ''}): Promise<any> => {
  let data = (query.search === '') ? _getData()
      : _.filter(_getData(), (o: Place) => (o.name.toLowerCase().search(query.search.toLowerCase()) > -1 
                                        || o.desc.toLowerCase().search(query.search.toLowerCase()) > -1));
  if (query.filters && query.filters[0] && query.filters[0].value) {
    data = _.filter(data, (o: Place) => (o.seats >= parseInt(query.filters[0].value)));
  }
  return Promise.resolve({ data: data });
};

export const addItem = (item: Place): Promise<any> => {
  if (!item.name || item.name === '') return Promise.reject(false);
  let data = _getData();
  item.id = uuidv1();
  item.desc = item.desc || '';
  item.seats = item.seats || 0;
  data.push(item);
  _setData(data);
  return Promise.resolve(true);
};

export const updateItem = (item: Place): Promise<any> => {
  let data = _getData();
  let record = _.find(data, { id: item.id });
  if (record === undefined || !item.name || item.name === '') return Promise.reject(false);
  deleteItem(record);
  data = _getData();
  item.desc = item.desc || '';
  item.seats = item.seats || 0;
  data.push(item);
  _setData(data);
  return Promise.resolve(true);
};

export const deleteItem = (item: Place): Promise<any> => {
  _setData(_.reject(_getData(), { id: item.id }));
  return Promise.resolve(true);
};

// ----------------------

export const getPlace = (id: string): any => {
  return _.find(_getData(), { id: id });
};

export const getAllPlaces = (): any => {
  return _getData();
};