import React from 'react';

import { createBrowserRouter } from 'react-router-dom';

import { HOME } from './routes';

import App from './components/app/App';

const router = createBrowserRouter([
    {
        path: HOME,
        element: <App />,
        // errorElement: <Element />
        children: [
            // {
            //     path: Route,
            //     element: <Element />
            // },
        ],
    },
]);

export default router;
