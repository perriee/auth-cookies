// using Cookies

import axios from 'axios';
import { CookieKeys, CookieStorage } from './cookies';
// import { CookieKeys, CookieStorage } from './cookies';

const token = CookieStorage.get(CookieKeys.AuthToken) ? CookieStorage.get(CookieKeys.AuthToken) : undefined;

const http_cookies = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    accept: 'application/json',
  },
});

http_cookies.interceptors.request.use(
  (config) => {
    console.log('config interceptors:', config);
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token ? token : ''}`,
    };
    return config;
  }
  // (error) => {
  //   console.log('http_cookies.jsx -> error:', error);
  //   if (error.response.status === 401) {
  //     window.location.href = '/login';
  //   }
  //   return Promise.reject(error);
  // }
);

export default http_cookies;
