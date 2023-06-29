import React from 'react';

import styles from './Engineer.module.css'

const Engineer = ({ engineer, clicker }) => {

    const clickHandler = () => clicker(engineer._id);

    return <div className={styles.container} onClick={clickHandler}>{engineer.name}</div>

};

export default Engineer;