import _ from 'lodash';
const uuidv1 = require('uuid/v1');
import { Impresario } from "../models";

const _getData = (): Impresario[] => JSON.parse(localStorage.getItem('impresarios') || "[]");
const _setData = (data: Impresario[]) => localStorage.setItem('impresarios', JSON.stringify(data));

export const getAll = (query: any = {search: ''}): Promise<any> => {
  let data = (query.search === '') ? _getData()
      : _.filter(_getData(), (o: Impresario) => (o.name.toLowerCase().search(query.search.toLowerCase()) > -1));
  if (query.filters && query.filters[0] && query.filters[0].value && query.filters[0].value.length) {
    data = _.filter(data, (o: Impresario) => (_.intersection(o.genres, query.filters[0].value).length > 0));
  }
  return Promise.resolve({ data: data });
};

export const addItem = (item: Impresario): Promise<any> => {
  if (!item.name || item.name === '' || !item.genres || item.genres.length === 0) return Promise.reject(false);
  let data = _getData();
  item.id = uuidv1();
  data.push(item);
  _setData(data);
  return Promise.resolve(true);
};

export const updateItem = (item: Impresario): Promise<any> => {
  let data = _getData();
  let record = _.find(data, { id: item.id });
  if (record === undefined || !item.name || item.name === '' || !item.genres || item.genres.length === 0) return Promise.reject(false);
  deleteItem(record);
  data = _getData();
  data.push(item);
  _setData(data);
  return Promise.resolve(true);
};

export const deleteItem = (item: Impresario): Promise<any> => {
  _setData(_.reject(_getData(), { id: item.id }));
  return Promise.resolve(true);
};

// ----------------------

export const getImpresario = (id: string): any => {
  return _.find(_getData(), { id: id });
};

export const getAllImpresarios = (): any => {
  return _getData();
};