import React from 'react';
import Navbar from '../Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <ToastContainer />
            <Navbar />
            <div className='px-4 md:px-0 mb-12 md:mb-24'>
                <Outlet />
            </div>
        </div>
    );
};

export default Root;