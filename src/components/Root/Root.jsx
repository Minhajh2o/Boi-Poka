import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar />
            <div className='px-4 md:px-0'>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;