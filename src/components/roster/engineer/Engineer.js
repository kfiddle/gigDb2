import React from 'react';

import styles from './Engineer.module.css'

const Engineer = ({ engineer }) => {

    return <div className={styles.container}>{engineer.name}</div>

};

export default Engineer;