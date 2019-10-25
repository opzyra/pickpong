import jwt from 'jsonwebtoken';
import storage from './storage';

export function userDecode() {
  const access_token = storage.getItem('access_token');
  if (!access_token) return null;
  const { user } = jwt.decode(access_token);
  return user;
}

export function getToken() {
  return storage.getItem('access_token');
}

export function onAuth() {
  const access_token = storage.getItem('access_token');
  return !!access_token;
}
