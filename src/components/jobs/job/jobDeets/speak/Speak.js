import React from 'react';

import styles from './Speak.module.css';

const Speak = ({ speak }) => {
    
    const classN = speak.engineer_id ? styles.hired : styles.unhired;

    return <div className={classN}>{speak.name}</div>

};

export default Speak;