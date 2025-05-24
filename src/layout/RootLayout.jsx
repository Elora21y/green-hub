import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const RootLayout = () => {
    const navigation = useNavigation()
    const isNavigation = Boolean(navigation.location)
    return (
        <div className='bg-base-100 min-h-screen'>
            <header className='sticky backdrop-blur-3xl top-0 z-10'>
                <Navbar/>
            </header>
            {
                isNavigation && <Loading/>
            }
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