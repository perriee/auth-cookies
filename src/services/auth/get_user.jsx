import { useQuery } from '@tanstack/react-query';
import { API_ENDPOINT } from '../../utils/api-endpoint';
import http_cookies from '../../utils/http_cookies';

const getUser = async ({ queryKey }) => {
  const [_key] = queryKey;
  try {
    const result = await http_cookies.get(_key);
    console.log('result -> get_user.jsx:', result);
    return result.data;
  } catch (err) {
    console.log('error -> get_user.jsx:', err);
    if (err.response && err.response.status === 401) {
      window.location.href = '/login';
    }
    throw err;
  }
};

const useGetUser = (options) => {
  return useQuery([API_ENDPOINT.GET_USER, options], getUser);
};

export { getUser, useGetUser };
