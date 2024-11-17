import React, { useEffect, useState } from 'react';
import { storedCart } from '../../utilities/utilits';
import { Link, useLoaderData, useLocation, useNavigate, useNavigation } from 'react-router-dom';
import useTitle from '../../utilities/useTitle';
import SectionCover from '../SectionCover/SectionCover';
import { FaDollarSign, FaLocationDot } from 'react-icons/fa6';
import Loading from '../Loading/Loading';

const AppliedJobs = () => {
    const navigation = useNavigation()
    if(navigation.state === 'loading') {
        return <Loading />
    }
    useTitle('Applied Job');
    // const loaddedJobs = useLoaderData();
    const [allJobs, setAllJobs] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    useEffect(() => {
        fetch('jobs.json')
        .then(res => res.json())
        .then(data => {
            setAllJobs(data)
        })
    }, [])

    useEffect(() => {
        const storedJob = storedCart();
        if (allJobs.length > 0) {
            /* const myAppliedJobs = loaddedJobs?.filter(job => storedJob.includes(parseInt(job.id)));
            console.log(myAppliedJobs); */
            const jobApplied = [];
            for (const id of storedJob) {
                const job = allJobs?.find(job => job.id == id);
                jobApplied.push(job);
            }
            setJobs(jobApplied);
            setDisplayJobs(jobApplied)
        }
    }, [allJobs])

    const handleDisplayJobs = (filter) => {
        if (filter === 'Remote') {
            const remoteJobs = jobs?.filter(job => job.remote_or_onsite == 'Remote');
            setDisplayJobs(remoteJobs);
        } else if (filter === 'Onsite') {
            const onsiteJobs = jobs?.filter(job => job.remote_or_onsite == 'Onsite');
            setDisplayJobs(onsiteJobs);
        } else {
            setDisplayJobs(jobs);
        }
    }
    
    return (
        <div>
            <SectionCover title={'Applied Job'} />
            <div className='p-2 md:p-6'>
                <label className="form-control w-full max-w-xs mb-4">
                    <select onChange={(e) => handleDisplayJobs(e.target.value)} className="select select-bordered">
                        <option disabled selected>Select Job Category</option>
                        <option value='all'>All Jobs</option>
                        <option value='Remote'>Remote</option>
                        <option value='Onsite'>Onsite</option>
                    </select>
                </label>
                {
                    displayJobs?.map(job => <div key={job.id}
                        className='border p-3 rounded-md mb-4'
                    >
                        <div className='md:flex items-center gap-8'>
                            <img className='w-28' src={job.logo} alt={job.job_title} />
                            <div className='flex-grow space-y-2'>
                                <h4 className='text-xl font-bold text-slate-800'>{job.job_title}</h4>
                                <p className='text-slate-500'>{job.company_name}</p>
                                <div className='flex gap-3'>
                                    <button className='btn btn-primary btn-outline'>{job.remote_or_onsite}</button>
                                    <button className='btn btn-primary btn-outline'>{job.job_type}</button>
                                </div>
                                <div className='text-gray-600 flex gap-6'>
                                    <div className='flex gap-2 items-center'>
                                        <FaLocationDot />
                                        <p>{job.location}</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <FaDollarSign />
                                        <p>{job.salary}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Link className='btn-hub' to={`/detailsJob/${job.id}`}>View Details</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;