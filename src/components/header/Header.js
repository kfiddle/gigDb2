import React from 'react';


import styles from './Header.module.css';

const Header = () => {

    return <header className={styles.header}>
        <div className={styles.logoDiv}><h1>Greatest Codesmith Cohort -> ECRI 41</h1></div>

        <div>
            <ul className={styles.navList}>
                <li className={styles.li}>Engineers Roster</li>
                <li></li>
            </ul>
        </div>
    </header>

};

export default Header;