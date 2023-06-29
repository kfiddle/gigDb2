import React, { useContext, useEffect, useState } from 'react';

import { DashHolder } from '../../../../store/object-holder';

import styles from './JobDeets.module.css'
import Speak from './speak/Speak';

const JobDeets = () => {
    const [speaks, setSpeaks] = useState([]);
    const { dash, dispatch } = useContext(DashHolder);
    const { clickedJob } = dash;

    console.log(clickedJob.speaks)

    let displayedSpeaks = clickedJob.speaks.map(speak => (
        <Speak key={speak.id} speak={speak}/>
    ))



    return <div className={styles.deetsContainer}>
        <div className={styles.companyDiv}>{clickedJob.company}</div>
        <div className={styles.salaryDiv}>${clickedJob.salary},000</div>
        <div className={styles.speaksDiv}>{displayedSpeaks}</div>

    </div>

};

export default JobDeets;