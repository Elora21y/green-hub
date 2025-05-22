import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const RootLayout = () => {
    return (
        <div className='bg-base-100 min-h-screen'>
            <header className='sticky backdrop-blur-lg top-0 z-10'>
                <Navbar/>
            </header>
            <main className='min-h-[calc(100vh-412px)] max-w-7xl mx-auto my-5 md:my-8 lg:my-12 px-5 sm:px-8 xl:px-0 '>
                <Outlet/>
            </main>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};

export default RootLayout;