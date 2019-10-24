import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';

import storage from '../utils/storage';

function Callback({ history, location }) {
  useEffect(() => {
    async function getToken(code) {
      try {
        const { data } = await axios.post(`http://localhost:3003/auth/`, {
          code,
        });
        storage.setItem('access_token', data.access_token);
        history.push('/');
      } catch (error) {
        history.push('/error');
      }
    }

    const { code } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    getToken(code);
  }, [history, location]);
  return null;
}

export default Callback;
