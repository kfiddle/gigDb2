import React, { Component, useContext, useReducer, useEffect } from 'react';
import ReactDOM from "react-dom";

import { DashHolder } from './store/object-holder';

import Dashboard from "./components/Dashboard";
import Header from './components/header/Header';
import Roster from './components/roster/Roster';
import Jobs from './components/jobs/Jobs';
import Sidebar from './components/sidebar/Sidebar';

const initialState = {
    roster: [],
    jobs: [],
    sideBarOpen: false,
};

const dashReducer = (state, action) => {
    switch (action.type) {
        case 'engineers':
            return { ...state, roster: action.list, jobs: [] }
        case 'sideBarClick':
            return { ...state, sideBarOpen: true }
        case 'jobs':
            return { ...state, jobs: action.list, roster: []  }
    }
}

const App = () => {
    const [dash, dispatch] = useReducer(dashReducer, initialState);

    useEffect(() => {
        // console.log(dash.jobs)
    }, [dash.jobs])

    return <div>
        <DashHolder.Provider value={{ dash, dispatch }}>
            <Header />
            <Dashboard />
            <Sidebar />
            {dash.roster.length > 1 && <Roster />}
            {dash.jobs.length > 1 && <Jobs />}
        </DashHolder.Provider>
    </div>

};

ReactDOM.render(<App />, document.getElementById("root"))


