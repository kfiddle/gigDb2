import React, { useEffect } from 'react';


import styles from './Sidebar.module.css'

const Sidebar = () => {

    return <div className={styles.sidebarContainer}>
        <div className={styles.xDiv}>X</div>
        <ul>
            <li className={styles.menuOption}>ADD JOB</li>
            <li className={styles.menuOption}>ADD LANGUAGE</li>
        </ul>

    </div>

};

export default Sidebar;