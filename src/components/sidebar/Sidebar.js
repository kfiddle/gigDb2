import React, { useEffect, useContext, useState } from 'react';


import styles from './Sidebar.module.css'
import { DashHolder } from '../../store/object-holder';

const Sidebar = () => {
    const [whichForm, setWhichForm] = useState('');
    const [formVals, setFormVals] = useState([]);
    const { dash, dispatch } = useContext(DashHolder);

    const closeSidebar = () => dispatch({ type: 'sidebarClick', isOpen: false })

    const jobFormClicker = () => setWhichForm('job')
    const langFormClicker = () => setWhichForm('lang');

    const formInputter = (event, inputId) => {
        console.log(event.target.value, inputId);
        let prevVals = [...formVals];
        prevVals[inputId] = event.target.value;
        setFormVals(prevVals);
    }

    const sendJobUp = () => {
        let currentVals = [...formVals];
        let num = currentVals[2];
        currentVals[2] = Number(num);
        setFormVals(currentVals);
        console.log(formVals);
    }



    return <div className={styles.sidebarContainer}>
        <div className={styles.xDiv} onClick={closeSidebar}>X</div>
        <ul>
            <li className={styles.menuOption} onClick={jobFormClicker}>ADD JOB</li>
            <li className={styles.menuOption} onClick={langFormClicker}>ADD LANGUAGE</li>
        </ul>

        {whichForm === 'job' && <div className={styles.formDiv}>
            <input className={styles.input} placeholder='Title' onChange={(e) => formInputter(e, 0)} />
            <input className={styles.input} placeholder='Company' onChange={(e) => formInputter(e, 1)} />
            <input className={styles.input} placeholder='Salary' onChange={(e) => formInputter(e, 2)} />
            {/*         
            <div>
                <check
            </div> */}

            <button className={styles.submit} onClick={sendJobUp}>Submit</button>


        </div>

        }

        {whichForm === 'lang' && <div className={styles.formDiv}>
            <input className={styles.input} placeholder='Language Name' onChange={(e) => formInputter(e, 0)} />
            <button className={styles.submit} onClick={sendJobUp}>Submit</button>

        </div>}

    </div>

};

export default Sidebar;