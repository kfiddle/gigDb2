import React, { useContext } from 'react';

import styles from './EngSpeaks.module.css';
import { DashHolder } from '../../../../../../store/object-holder';

const EngSpeaks = () => {
    const { dash, dispatch } = useContext(DashHolder)

    const displayEngineers = dash.engineersBySpeak.map(engineer => (
        <div key={engineer._id} className={styles.engDiv}>{engineer.name}</div>
    ))

    return <div className={styles.engineersContainer}>{displayEngineers}</div>

};

export default EngSpeaks;