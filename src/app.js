import React, { Component, useContext, useReducer, useEffect } from 'react';
import ReactDOM from "react-dom";

import { DashHolder } from './store/object-holder';

import Dashboard from "./components/Dashboard";
import Header from './components/header/Header';
import Roster from './components/roster/Roster';

const initialState = {
    roster: [],
    sideBarOpen: false,
};

const dashReducer = (state, action) => {
    switch (action.type) {
        case 'engineers':
            return { ...state, roster: action.list }
        case 'sideBarClick':
            return { ...state, sideBarOpen: true }
    }
}

const App = () => {
    const [dash, dispatch] = useReducer(dashReducer, initialState);

    useEffect(() => {
        console.log(dash.sideBarOpen)
    }, [dash.sideBarOpen])

    return <div>
        <DashHolder.Provider value={{ dash, dispatch }}>
            <Header />
            <Dashboard />
            {dash.roster.length > 1 && <Roster />}
        </DashHolder.Provider>
    </div>

};

ReactDOM.render(<App />, document.getElementById("root"))


