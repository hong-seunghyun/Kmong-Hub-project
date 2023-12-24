import axios from 'axios';
import mem from 'mem';
import { type } from 'os';

const REFRESH_URL = '';

axios.interceptors.request.use((config) => {
  if (!config.headers) return config;

  let token: string | null = null;

  if (config.url === REFRESH_URL) {
    token = localStorage.getItem('refreshToken');
  } else {
    token = localStorage.getItem('accessToken');
  }

  if(token !== null){
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

const getRefreshToken = mem(async (): Promise<string | void> => {
  try {
    const { data } = await axios.get(REFRESH_URL);

    const accessToken = data.data.accessToken;
    const refreshToken = data.data.refreshToken;

    console.log(`accessToken ${accessToken}`);
    console.log(`refreshToken ${refreshToken}`);

    localStorage.setItem('accessToken', accessToken);

    if (refreshToken !== null) {
      localStorage.setItem('refreshToken', refreshToken);
    }

    return accessToken;
  } catch (e) {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
  }
}, { maxAge: 1000 })


axios.interceptors.response.use(
  (res) => res,
  async (err) => {
    const { config, response: { status } } = err;

    if (config.url === REFRESH_URL || status !== 401 || config.sent) {
      return Promise.reject(err);
    }

    config.sent = true;
    const accessToken = await getRefreshToken();

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
      return axios(config);
    }

    return Promise.reject(err);
  }
);