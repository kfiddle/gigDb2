import React, { useContext } from 'react';

import { DashHolder } from '../../store/object-holder';

import styles from './Header.module.css';

const Header = () => {
    const { dash, dispatch } = useContext(DashHolder);

    const getPlayers = async () => {
        const reply = await fetch('http://localhost:3000/players')
        const parsedList = await reply.json();
        if (parsedList.players.length) dispatch({ type: 'players', list: parsedList.players })
    }

    return <header className={styles.header}>
        <div className={styles.logoDiv}><h1>Greatest Codesmith Cohort => ECRI 41</h1></div>

        <div>
            <ul className={styles.navList}>
                <li onClick={getPlayers} className={styles.li}>ROSTER</li>
                <li className={styles.li}>JOBS</li>
            </ul>
        </div>
    </header>

};

export default Header;