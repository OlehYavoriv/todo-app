import React from 'react';
import ReactDOM from 'react-dom/client';
import queryClient from "./utils/queryClient";
import { QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { App } from './App';
import './styles/index.scss';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App/>
            <ToastContainer/>
        </QueryClientProvider>
    </React.StrictMode>
);
