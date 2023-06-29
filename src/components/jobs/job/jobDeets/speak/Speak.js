import React, { useContext } from 'react';

import { DashHolder } from '../../../../../store/object-holder';
import styles from './Speak.module.css';

const Speak = ({ speak }) => {
    const { dash, dispatch } = useContext(DashHolder);

    const classN = speak.engineer_id ? styles.hired : styles.unhired;

    const speakClicker = () => dispatch({type: 'clickedSpeak', speak: speak });

    
    // const jobClicker = () => dispatch({type: 'clickedJob', job: job })
    // const speakClicker = () => console.log(speak)

    return <div className={classN} onClick={speakClicker}>{speak.name}</div>

};

export default Speak;