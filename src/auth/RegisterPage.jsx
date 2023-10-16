import React, { useEffect, useState } from 'react';
import { useRegisterUser } from '../services/auth/register_user';
import { showErrorToast, showSuccessToast } from '../helpers/toastHelpers';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { mutate: registerUser, isSuccess, isError, error } = useRegisterUser();

  const handleInput = (e) => {
    // validasi apakah e (event)nya ada
    if (e) {
      if (e.target.id === 'email') setEmail(e.target.value); // handle inputan email
      if (e.target.id === 'username') setUsername(e.target.value); // handle inputan username
      if (e.target.id === 'password') setPassword(e.target.value); // handle inputan password
    }
  };

  console.log('email:', email);
  console.log('username:', username);
  console.log('password:', password);

  console.log('isSuccess:', isSuccess);
  console.log('isError:', isError);

  if (error) console.log('error:', error.response.data.message);
  if (isSuccess === true) console.log('akun berhasil di buat');

  useEffect(() => {
    if (isError) {
      showErrorToast(error.response.data.message);
    }

    if (isSuccess === true) {
      showSuccessToast('Login Berhasil!');
      navigate('/login');
    }
  }, [isError, isSuccess]);

  const handleRegisterUser = () => {
    registerUser({
      email: email,
      name: username,
      password: password,
    });
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col p-8 gap-4 shadow-lg rounded-xl w-[25rem]">
        <div className="text-2xl font-bold text-center">REGISTER</div>
        <div className="flex flex-col gap-4">
          <input id="email" type="email" placeholder="Masukkan Email" className="bg-slate-200 px-3 py-2 rounded-lg outline-none" onChange={handleInput} />
          <input id="username" type="text" placeholder="Masukkan Username" className="bg-slate-200 px-3 py-2 rounded-lg outline-none" onChange={handleInput} />
          <input id="password" type="password" placeholder="Masukkan Password" className="bg-slate-200 px-3 py-2 rounded-lg outline-none" onChange={handleInput} />
          <button
            onClick={() => {
              handleRegisterUser();
            }}
            className="bg-sky-500 px-3 py-2 rounded-lg text-white font-semibold hover:bg-sky-600"
          >
            Register
          </button>
          <div className="text-base text-center">
            Sudah punya akun?{' '}
            <a href="/login" className="text-sky-500 font-semibold">
              Masuk disini.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
