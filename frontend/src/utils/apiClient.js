import axios from 'axios';
import { getToken } from './token';

const baseURL = process.env.REACT_APP_SERVER;

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(request => {
  const token = getToken();
  request.headers['Authorization'] = token ? `Bearer ${token}` : null;
  return request;
});

export const get = async (url, params) => {
  const { data } = await instance.get(url, { params });
  return data;
};

export const post = async (url, params) => {
  const { data } = await instance.post(url, params);
  return data;
};
