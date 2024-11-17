import React from 'react';
import { FaBeer, FaDollarSign } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary } = job;
    return (
        <div className='border p-2 md:p-6 rounded-md bg-slate-50 hover:bg-orange-50 hover:duration-300 shadow-md space-y-6'>
            <img className='h-10 mb-4' src={logo} alt={job_title} />
            <div className='space-y-2'>
                <h3 className='md:text-xl font-bold text-slate-700-800'>{job_title}</h3>
                <p className='text-slate-500'>{company_name}</p>
                <div className='flex gap-4'>
                    <button className='btn btn-primary btn-outline'>{remote_or_onsite}</button>
                    <button className='btn btn-primary btn-outline'>{job_type}</button>
                </div>
                <div className='text-gray-600 flex gap-6'>
                    <div className='flex gap-2 items-center'>
                        <FaLocationDot />
                        <p>{location}</p>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <FaDollarSign />
                        <p>{salary}</p>
                    </div>
                </div>
            </div>
            <div>
                <Link to={`/detailsJob/${id}`} className='btn-hub'>View Details</Link>
            </div>
        </div>
    );
};

export default Job;