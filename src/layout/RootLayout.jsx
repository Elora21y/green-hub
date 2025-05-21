import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main className='max-w-7xl mx-auto my-5 md:my-8 px-5 sm:px-8 xl:px-0'>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default RootLayout;