import axios from 'axios';
// import {getTokens} from '../utils/token-utils';
// import {refreshToken} from './services/auth';
// import {getTokens, saveTokens} from '../utils/token-utils';

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
  },
});

// myApiInstance.interceptors.request.use(
//   async (config: any) => {
//     const {accessToken, refreshToken} = await getTokens();
//     const headers = {
//       ...config.headers,
//       Authorization: `Bearer ${accessToken}`,
//       'x-refresh-token': refreshToken,
//     };
//     return {...config, headers};
//   },
//   error => {
//     Promise.reject(error);
//   },
// );

export default ApiClient;
