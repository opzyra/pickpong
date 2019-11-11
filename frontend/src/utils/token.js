import jwt from 'jsonwebtoken';
import storage from './storage';
import moment from 'moment';

export function userDecode() {
  const access_token = storage.getItem('access_token');
  if (!access_token) return null;
  const { exp, user } = jwt.decode(access_token);
  const now = moment();
  const expired = moment(exp * 1000).isBefore(now);

  if (expired) {
    storage.removeItem('access_token');
    return null;
  }

  return user;
}

export function getToken() {
  return storage.getItem('access_token');
}

export function onAuth() {
  const access_token = storage.getItem('access_token');
  return !!access_token;
}
