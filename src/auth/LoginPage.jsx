import React, { useEffect, useState } from 'react';
import { useLoginUser } from '../services/auth/login_user';
import 'react-toastify/dist/ReactToastify.css';
import { showErrorToast, showSuccessToast } from '../helpers/toastHelpers';
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const { mutate: loginUser, isSuccess, isError, error, data, status } = useLoginUser();

  const handleInput = (e) => {
    // validasi apakah e (event)nya ada
    if (e) {
      if (e.target.id === 'email') setEmail(e.target.value); // handle inputan email
      if (e.target.id === 'password') setPassword(e.target.value); // handle inputan password
    }
  };

  console.log('email:', email);
  console.log('password:', password);

  console.log('isSuccess:', isSuccess);
  console.log('isError:', isError);

  if (isError) console.log('error:', error.response.data.message);
  if (isSuccess === true) {
    console.log("token login:", data.data.token);
    console.log('Login Berhasil!');
  } 

  useEffect(() => {
    if (isError) {
      showErrorToast(error.response.data.message);
    }

    if (isSuccess === true) {
      showSuccessToast('Login Berhasil!');
      navigate('/dashboard');
    }
  }, [status]); // akan mengambil nilai baru ketika value status terupdate

  const handleLoginUser = () => {
    loginUser({
      email: email,
      password: password,
    });
  };

  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col p-8 gap-4 shadow-lg rounded-xl w-[25rem]">
        <div className="text-2xl font-bold text-center">LOGIN</div>
        <div className="flex flex-col gap-4">
          <input id="email" type="email" placeholder="Masukkan Email" className="bg-slate-200 px-3 py-2 rounded-lg outline-none" onChange={handleInput} />
          <input id="password" type="password" placeholder="Masukkan Password" className="bg-slate-200 px-3 py-2 rounded-lg outline-none" onChange={handleInput} />
          <button
            onClick={() => {
              handleLoginUser();
            }}
            className="bg-sky-500 px-3 py-2 rounded-lg text-white font-semibold hover:bg-sky-600"
          >
            Login
          </button>
          <div className="text-base text-center">
            Belum punya akun?{' '}
            <a href="/register" className="text-sky-500 font-semibold">
              Daftar disini.
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
