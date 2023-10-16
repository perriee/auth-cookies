import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINT } from '../../utils/api-endpoint';
import http_session from '../../utils/http_session';
import { CookieKeys, CookieStorage } from '../../utils/cookies';

const loginUser = async (input) => {
  try {
    const { data } = await http_session.post(API_ENDPOINT.LOGIN_USER, input);
    console.log('login_user.jsx -> data:', data);
    console.log('token login from login_user.jsx:', data.data.token);
    CookieStorage.set(CookieKeys.AuthToken, data.data.token);
    return data;
  } catch (err) {
    console.log('error from catch login_user.jsx ->', err);
    throw err;
  }
};

const useLoginUser = () => {
  return useMutation(loginUser);
};

export { loginUser, useLoginUser };
