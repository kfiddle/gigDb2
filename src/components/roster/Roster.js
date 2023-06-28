import React, { useContext } from 'react';
import { DashHolder } from '../../store/object-holder';


import styles from './Roster.module.css';
const Roster = () => {
    const { dash, dispatch } = useContext(DashHolder);
    console.log(dash.roster);

    let displayRoster = dash.roster.map(player => (
        <div key={dash.roster.indexOf(player)}>{player.fname}</div>
    ))

    return <div className={styles.rosterContainer}>{displayRoster}</div>
};

export default Roster;