import React, { useEffect, useState } from 'react';
import SectionTitle from '../../SectionTitle/SectionTitle';
import Job from '../Job/Job';
import { useNavigation } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const Jobs = () => {
    const navigation = useNavigation();
    if(navigation.state === 'loading') {
        return <Loading />
    }
    const [jobs, setJobs] = useState([]);
    const [showAll, setShowAll] = useState(true);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => {
                if(showAll) {
                    setJobs(data.splice(0,4));
                }else {
                    setJobs(data);
                }
            })
    }, [showAll])
    // console.log(jobs.splice(0, 4));
    // console.log(jobs.splice(0, jobs.length));

    return (
        <div className='p-4 md:px-10 md:pb-10'>
            <SectionTitle heading={'Featured Jobs'} subHeading={'Explore thousands of job opportunities with all the information you need. Its your future'} />
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {jobs?.map(job => <Job key={job.id} job={job} />)}
            </div>
            <div className='text-center mt-6'>
                <button onClick={() => setShowAll(!showAll)} className='btn-hub'>{showAll ? 'See All Jobs': 'See Less Jobs'}</button>
            </div>
        </div>
    );
};

export default Jobs;