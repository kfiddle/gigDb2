import React, { useEffect, useContext } from 'react';


import styles from './Sidebar.module.css'
import { DashHolder } from '../../store/object-holder';

const Sidebar = () => {
    const { dash, dispatch } = useContext(DashHolder);

    const closeSidebar = () => dispatch({ type: 'sidebarClick', isOpen: false })

    return <div className={styles.sidebarContainer}>
        <div className={styles.xDiv} onClick={closeSidebar}>X</div>
        <ul>
            <li className={styles.menuOption}>ADD JOB</li>
            <li className={styles.menuOption}>ADD LANGUAGE</li>
        </ul>

    </div>

};

export default Sidebar;