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
};

const dashReducer = (state, action) => {
    switch (action.type) {
        case 'engineers':
            return { ...state, clickedJob: null, roster: action.list, jobs: [] }
        case 'sidebarClick':
            return { ...state, sidebarOpen: action.isOpen }
        case 'jobs':
            return { ...state, clickedJob: null, jobs: action.list, roster: []  }
        case 'clickedJob' :
            console.log('here in the clicky of the jobby')

            return { ...state, clickedJob: action.job }
    }
}

const App = () => {
    const [dash, dispatch] = useReducer(dashReducer, initialState);

    useEffect(() => {
        // console.log(dash.clickedJob)
    }, [dash.clickedJob])

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


