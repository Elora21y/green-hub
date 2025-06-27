import React from 'react';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-screen bg-white text-[#425f57]'>
            <img src="/error.jpg" alt="" className='max-h-96'/>
            <h3 className='text-2xl -mt-10 mb-5 font-bold'>Page Not Found</h3>
            <Link to='/' className='btn bg-[#425f57] text-white hover:bg-white hover:text-[#425f57] hover:border-[#425f57] transition-all duration-500'>Go Back Home</Link>
        </div>
    );
};

export default Error;