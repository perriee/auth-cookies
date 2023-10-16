import React from 'react';
import ReactDOM from 'react-dom/client';
import '../src/assets/style/index.css';
import { RouterList } from './routes/RouterList';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ToastContainer />
      <RouterList />
    </QueryClientProvider>
  </React.StrictMode>
);
