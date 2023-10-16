// using session Storage

import axios from 'axios';

const token = sessionStorage.getItem('token') ? sessionStorage.getItem('token') : undefined;

const http_session = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 30000,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${token}`,
  },
});

export default http_session;
