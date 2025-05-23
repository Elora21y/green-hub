import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen'>
            <img src="/error.jpg" alt="" className='max-h-96'/>
            <h3 className='text-2xl -mt-10 mb-5 font-bold'>Page Not Found</h3>
            <Link to='/' className='btn bg-secondary text-white hover:bg-white hover:text-secondary hover:border-secondary transition-all duration-500'>Go Back Home</Link>
        </div>
    );
};

export default Error;