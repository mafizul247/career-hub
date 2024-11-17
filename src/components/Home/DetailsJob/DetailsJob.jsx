import { useLoaderData, useNavigation, useParams } from 'react-router-dom';
import SectionCover from '../../SectionCover/SectionCover';
import { BiDollarCircle } from 'react-icons/bi';
import { FaCalendarDays, FaPhone } from 'react-icons/fa6';
import { MdOutlineEmail } from 'react-icons/md';
import { IoLocationOutline } from 'react-icons/io5';
import { saveJobApplication, storedCart } from '../../../utilities/utilits';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useTitle from '../../../utilities/useTitle';
import { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading';

const DetailsJob = () => {
    const navigation = useNavigation()
    if(navigation.state === 'loading') {
        return <Loading />
    }
    const { id } = useParams();
    const loaddedJobs = useLoaderData();
    const job = loaddedJobs?.find(newJob => newJob.id == id);
    const { job_title, salary, job_description, job_responsibility, educational_requirements, experiences, contact_information } = job;
    useTitle(`${job_title}`)


    const handleAppliedJob = (id) => {
        const saveCart = storedCart();
        const exist = saveCart?.find(jobId => jobId == id);
        if (!exist) {
            saveJobApplication(id);
            toast.success(`Applied Job`)
        } else {
            toast.error('Already Applied')
        }

    }

    return (
        <div className='space-y-12'>
            <SectionCover title={`Details Job: ${job_title}`} />
            <div className='pb-6 mx-2 md:mx-12 md:flex gap-6'>
                <div className='space-y-2  md:w-2/3 text-justify p-3 md:p-6'>
                    <p><strong>Job Description:</strong> <span className='text-slate-500'>{job_description}</span> </p>
                    <p><strong>Job Responsibility:</strong> <span className='text-slate-500'>{job_responsibility}</span> </p>
                    <p><strong>Job Responsibility:</strong> <span className='text-slate-500'>{job_responsibility}</span> </p>
                    <p><strong>Education:</strong></p>
                    <p className='text-slate-500'>{educational_requirements}</p>
                    <p><strong>Experience:</strong></p>
                    <p className='text-slate-500'>{experiences}</p>
                </div>
                <div className=' md:w-1/3 p-2'>
                    <div className='bg-slate-100 rounded-md p-3 md:p-6 space-y-3'>
                        <h4 className='font-bold text-xl'>Detail Job:</h4>
                        <hr />
                        <div>
                            <div className='flex items-center gap-2 '>
                                <BiDollarCircle className='text-purple-500 text-xl' /> <p><strong>Salary: </strong> <span className='text-slate-500'>{salary} Per Month</span></p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <FaCalendarDays className='text-purple-500 text-2xl' /> <p><strong>Job Title: </strong> <span className='text-slate-500'>{job_title}</span></p>
                            </div>
                        </div>
                        <h4 className='font-bold text-xl'>Contact Information:</h4>
                        <hr />
                        <div>
                            <div className='flex items-center gap-2 '>
                                <FaPhone className='text-purple-500 text-xl' />
                                <p><strong>Phone: </strong> <span className='text-slate-500'>{contact_information?.phone}</span></p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <MdOutlineEmail className='text-purple-500 text-xl' />
                                <p><strong>Email: </strong> <span className='text-slate-500'>{contact_information?.email}</span></p>
                            </div>
                            <div className='flex items-center gap-2 '>
                                <IoLocationOutline className='text-purple-500 text-xl' />
                                <p> <strong>Address: </strong> <span className='text-slate-500'>{contact_information?.address}</span></p>
                            </div>
                        </div>
                    </div>
                    <button onClick={() => handleAppliedJob(id)} className='btn-hub w-full mt-4'>Apply Now</button>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
};

export default DetailsJob;