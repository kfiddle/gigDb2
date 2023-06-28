import React, { useContext } from 'react';
import { DashHolder } from '../../store/object-holder';


import styles from './Jobs.module.css';
const Jobs = () => {
    const { dash, dispatch } = useContext(DashHolder);
    console.log(dash.jobs);

    let displayJobs = dash.jobs.map(job => (
        <div key={job.id}>{job.title}</div>
    ))

    return <div className={styles.jobsContainer}>{displayJobs}</div>
};

export default Jobs;