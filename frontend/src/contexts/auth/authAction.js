import * as apiClient from '../../utils/apiClient';
import * as authContext from './authContext';
import storage from '../../utils/storage';
import { userDecode } from '../../utils/token';

export async function fetchAuthUrl(dispatch) {
  const { authUrl } = await apiClient.get('/auth');
  const fatchAuthUrlActionCreator = authContext.fetchAuthUrl(authUrl);
  dispatch(fatchAuthUrlActionCreator);
}

export async function fetchUser(dispatch) {
  let user = userDecode();

  if (user) {
    const { access_token } = await apiClient.post(`/auth/refresh`, { user });
    storage.setItem('access_token', access_token);
    user = userDecode();
  }

  const setUserActionCreator = authContext.setUser(user);

  dispatch(setUserActionCreator);
}

export async function setUser(dispatch, code) {
  const { access_token } = await apiClient.post(`/auth`, {
    code,
  });

  storage.setItem('access_token', access_token);

  const user = userDecode();
  const setUserActionCreator = authContext.setUser(user);
  dispatch(setUserActionCreator);
}
