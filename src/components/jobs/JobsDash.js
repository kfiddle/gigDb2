import React, { useContext } from 'react';
import { DashHolder } from '../../store/object-holder';

import Job from './job/Job';

import styles from './JobsDash.module.css';
import JobDeets from './job/jobDeets/JobDeets';

const JobsDash = () => {
    const { dash, dispatch } = useContext(DashHolder);

    let displayJobs = dash.jobs.map(job => (
        <Job key={job.id} job={job} />
    ))

    return <div className={styles.jobsDashContainer}>
        <div className={styles.jobsDiv}>{displayJobs}</div>
        {dash.clickedJob && <JobDeets />}
    </div>
};

export default JobsDash;