import React from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider } from 'react-router-dom';
import router from '@/router/router';

import { Provider } from 'react-redux';
import store from '@/store/store';

import axios from 'axios';
axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;

import './styles/_main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>
);
