import React from 'react';

import { Outlet } from 'react-router-dom';

import Header from '@/components/app/Header';
import Footer from '@/components/app/Footer';

export default () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);
