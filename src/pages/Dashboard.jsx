import React from 'react';
import { CookieKeys, CookieStorage } from '../utils/cookies';
import { useGetUser } from '../services/auth/get_user';
import { useNavigate } from 'react-router-dom';
import { showSuccessToast } from '../helpers/toastHelpers';

export const Dashboard = () => {
  const navigate = useNavigate();

  const { data: getDataUser } = useGetUser({});

  console.log('getDataUser->Dashboard.jsx:', getDataUser);

  const handleLogoutUser = () => {
    CookieStorage.remove(CookieKeys.AuthToken);
    showSuccessToast('Logout Berhasil!');
    navigate('/login');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <span className="text-3xl font-semibold">Hai, {getDataUser.data.name} !</span>
      <span className="text-3xl font-semibold">Selamat Datang di Halaman Dashboard</span>
      <button
        className="bg-sky-500 text-white px-3 py-2 rounded-lg font-semibold"
        onClick={() => {
          handleLogoutUser();
        }}
      >
        Logout
      </button>
    </div>
  );
};
