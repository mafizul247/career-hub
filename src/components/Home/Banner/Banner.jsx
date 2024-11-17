import React from 'react';
import image from './../../../assets/images/user.png'

const Banner = () => {
    return (
        <div className='md:flex justify-center items-center bg-slate-100 px-4 md:px-10 pt-16'>
            <div className='space-y-3 md:w-1/2'>
                <h1 className='text-3xl md:text-5xl font-bold'>One Step <br /> Closer To Your <br /> <span className='text-purple-500'>Dream Job</span></h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='btn-hub'>Get Started</button>
            </div>
            <div>
                <img className='md:h-[400px] pt-10 md:pt-0' src={image} alt="User Image" />
            </div>
        </div>
    );
};

export default Banner;