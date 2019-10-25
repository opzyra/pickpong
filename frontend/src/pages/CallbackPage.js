import { useEffect } from 'react';
import qs from 'qs';

import { setUser } from '../contexts/auth/authAction';
import { useAuthDispatch } from '../contexts/auth/authContext';

function Callback({ history, location }) {
  const authDispatch = useAuthDispatch();

  useEffect(() => {
    async function getToken() {
      const { code } = qs.parse(location.search, {
        ignoreQueryPrefix: true,
      });

      try {
        await setUser(authDispatch, code);
        window.location.href = '/';
      } catch (error) {
        history.push('/?error=auth');
      }
    }

    getToken();
  }, [authDispatch, history, location]);
  return null;
}

export default Callback;
