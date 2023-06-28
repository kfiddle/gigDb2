import React, { useContext } from 'react';

import { DashHolder } from '../../../store/object-holder';

import styles from './Job.module.css'

const Job = ({ job }) => {
    const { dash, dispatch } = useContext(DashHolder);

    const jobClicker = () => dispatch({type: 'clickedJob', job: job })

    return <div onClick={jobClicker} className={styles.container}>{job.title}</div>

};

export default Job;