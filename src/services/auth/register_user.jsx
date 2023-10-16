import { useMutation } from '@tanstack/react-query';
import { API_ENDPOINT } from '../../utils/api-endpoint';
import http_session from '../../utils/http_session';

const registerUser = async (input) => {
  const { data } = await http_session.post(API_ENDPOINT.REGISTER_USER, input);
  console.log('register_user.jsx -> data:', data);
  return data;
};

const useRegisterUser = () => {
  return useMutation(registerUser);
};

export { registerUser, useRegisterUser };
