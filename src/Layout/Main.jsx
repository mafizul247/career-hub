import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div className='container mx-auto'>
            <Header />
            <div className='min-h-[100vh]'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;