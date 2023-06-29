import React, { useContext, useState, useEffect } from 'react';
import { DashHolder } from '../../store/object-holder';

import Engineer from './engineer/Engineer';

import styles from './Roster.module.css';

const Roster = () => {
    const { dash, dispatch } = useContext(DashHolder);
    const [langs, setLangs] = useState([])

    useEffect(() => {


    }, [])

    const clicker = async (eid) => {

        try {
            const reply = await fetch(`http://localhost:3000/speaks/by_eng/${eid}`);
            const parsed = await reply.json();
            setLangs(parsed.speaks);

        } catch (err) {
            console.log('errrrr')
        }
    }

    let displayRoster = dash.roster.map(engineer => (
        <Engineer key={engineer._id} engineer={engineer} clicker={clicker} />
    ))

    let displayLangs = langs.length > 0 ?
        langs.map(lang => (<div key={langs.indexOf(lang)} className={styles.langDiv}>{lang.name}</div>))
        : [];

    return <div className={styles.rosterContainer}>
        <div className={styles.rosterDiv}>{displayRoster}</div>
        <div>{displayLangs}</div>
    </div>
};

export default Roster;