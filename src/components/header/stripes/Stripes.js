import React, { useContext } from 'react';


import { DashHolder } from '../../../store/object-holder';

import styles from './Stripes.module.css'

const Stripes = () => {
    const { dash, dispatch } = useContext(DashHolder);

    const openSide = () => {
        dispatch({ type: 'sidebarClick', isOpen: true })
    }


    return <div className={styles.stripeContainer} onClick={openSide}>
        <span className={styles.stripeOne}></span>
        <span className={styles.stripe2}></span>
        <span className={styles.stripe3}></span>

    </div>

};

export default Stripes;