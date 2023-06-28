import React, { Fragment } from 'react';


import styles from './TestHeader.module.css';

const TestHeader = () => {

    const toBack = async () => {
        console.log('clicked')
        const answer = await fetch('http://localhost:3000/players')
        const parsedAnswer = await answer.json();
        console.log(parsedAnswer)
    }

    return (
        <Fragment>
            <h3 className={styles.header}>From here, we have maybe a component</h3>
            <button onClick={toBack}>test backend more</button>
        </Fragment>)

};

export default TestHeader;