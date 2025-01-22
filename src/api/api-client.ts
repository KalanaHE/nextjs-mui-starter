import {getAccessToken} from '@/helpers/token-helper';
import axios from 'axios';

const baseURL = 'http://localhost:4000/';

const ApiClient = axios.create({
  baseURL,
  timeout: 30000,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Content-Type': 'application/json',
    Accept: 'application/json',
    cache: 'no-cache',
    mode: 'cors',
    redirect: 'follow',
    referrer: 'no-referrer',
    withCredentials: true,
  },
});

ApiClient.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async (config: any) => {
    const accessToken = await getAccessToken();
    const headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
      // 'x-refresh-token': refreshToken,
    };
    return {...config, headers};
  },
  error => {
    Promise.reject(error);
  },
);

export default ApiClient;
