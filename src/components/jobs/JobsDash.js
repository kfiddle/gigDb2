import React, { useContext } from 'react';
import { DashHolder } from '../../store/object-holder';

import Job from './job/Job';

import styles from './JobsDash.module.css';
import JobDeets from './job/jobDeets/JobDeets';

const JobsDash = () => {
    const { dash, dispatch } = useContext(DashHolder);

    // useEffect(() => {
    //     const getSpeaks = async () => {
    //         const reply = await fetch(`http://localhost:3000/jobs_speaks/${clickedJob.id}`);
    //         const parsedList = await reply.json();
    //         console.log(parsedList);
    //         // if (parsedList.engineers.length) dispatch({ type: 'engineers', list: parsedList.engineers })
    //     }
    //     getSpeaks();

    // }, [])

    let displayJobs = dash.jobs.map(job => (
        <Job key={job.id} job={job} />
    ))


    return <div className={styles.jobsDashContainer}>
        <div className={styles.jobsDiv}>{displayJobs}</div>
        {dash.clickedJob && <JobDeets />}
        {dash.engineersBySpeak.length > 0 && <div>got some</div>}
    </div>
};

export default JobsDash;