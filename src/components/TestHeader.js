import React, { Fragment } from 'react';

const TestHeader = () => {

    const toBack = async () => {
        console.log('clicked')
        const answer = await fetch('http://localhost:3000/clicked')
        const parsedAnswer = await answer.json();
        console.log(parsedAnswer)
    }

    return (
        <Fragment>
            <h3>From here, we have maybe a component</h3>
            <button onClick={toBack}>test backend</button>
        </Fragment>)

};

export default TestHeader;