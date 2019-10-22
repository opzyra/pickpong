import { useEffect } from 'react';
import axios from 'axios';
import qs from 'qs';

function Callback({ location }) {
  useEffect(() => {
    async function getToken(code) {
      await axios.post(`http://localhost:3003/auth/`, { code });
    }

    const { code } = qs.parse(location.search, {
      ignoreQueryPrefix: true,
    });

    getToken(code);
  }, [location]);
  return null;
}

export default Callback;
