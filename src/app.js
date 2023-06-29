import React, { Component, useContext, useReducer, useEffect } from 'react';
import ReactDOM from "react-dom";

import { DashHolder } from './store/object-holder';

import Dashboard from "./components/Dashboard";
import Header from './components/header/Header';
import Roster from './components/roster/Roster';
import JobsDash from './components/jobs/JobsDash';
import Sidebar from './components/sidebar/Sidebar';

const initialState = {
    roster: [],
    jobs: [],
    sidebarOpen: false,
    clickedJob: null,
    clickedSpeak: null,
    engineersBySpeak: [],
};

const dashReducer = (state, action) => {
    switch (action.type) {
        case 'engineers':
            return { ...state, clickedJob: null, roster: action.list, jobs: [] }
        case 'sidebarClick':
            return { ...state, sidebarOpen: action.isOpen }
        case 'jobs':
            return { ...state, clickedJob: null, jobs: action.list, roster: [] }
        case 'clickedJob':
            return { ...state, engineersBySpeak: [], clickedJob: action.job }
        case 'clickedSpeak':
            return { ...state, clickedSpeak: action.speak };
        case 'engineersBySpeak' :
            return { ...state, engineersBySpeak: action.engineers }
    }
}

const App = () => {
    const [dash, dispatch] = useReducer(dashReducer, initialState);

    useEffect(() => {
        const getEngineersByJobSpeak = async () => {
            const jsToSend = dash.clickedSpeak;
            if (!jsToSend.engineer_id) {
                let reply = await fetch(`http://localhost:3000/players/by_speak/${jsToSend.speaks_id}`)
                const parsedList = await reply.json();
                dispatch({ type: 'engineersBySpeak', engineers: parsedList.engineers });
            }
         }
         if (dash.clickedSpeak) getEngineersByJobSpeak();

    }, [dash.clickedSpeak])

    return <div>
        <DashHolder.Provider value={{ dash, dispatch }}>
            <Header />
            <Dashboard />
            {dash.sidebarOpen && <Sidebar />}
            {dash.roster.length > 1 && <Roster />}
            {dash.jobs.length > 1 && <JobsDash />}
        </DashHolder.Provider>
    </div>

};

ReactDOM.render(<App />, document.getElementById("root"))


