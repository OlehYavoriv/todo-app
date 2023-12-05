import React from 'react';
import ReactDOM from 'react-dom/client';
import queryClient from "./utils/queryClient";
import { QueryClientProvider } from "react-query";
import { App } from './App';
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <App/>
        </QueryClientProvider>
    </React.StrictMode>
);
