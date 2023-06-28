import React, { useContext } from 'react';
import { DashHolder } from '../../store/object-holder';

import Engineer from './engineer/Engineer';

import styles from './Roster.module.css';

const Roster = () => {
    const { dash, dispatch } = useContext(DashHolder);

    let displayRoster = dash.roster.map(engineer => (
        <Engineer key={engineer._id} engineer={engineer} />
    ))

    return <div className={styles.rosterContainer}>{displayRoster}</div>
};

export default Roster;