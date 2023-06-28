import React, { Component, useContext, useReducer, useEffect } from 'react';
import ReactDOM from "react-dom";

import { DashHolder } from './store/object-holder';

import Dashboard from "./components/Dashboard";
import Header from './components/header/Header';
import Roster from './components/roster/Roster';

const initialState = {
    roster: [],
};

const dashReducer = (state, action) => {
    switch (action.type) {
        case 'players':
            return { ...state, roster: action.list }
    }
}

const App = () => {
    const [dash, dispatch] = useReducer(dashReducer, initialState);

    useEffect(() => {
        if (dash.roster.length > 0) console.log(dash.roster)
    }, [dash.roster])

    return <div>
        <DashHolder.Provider value={{ dash, dispatch }}>
            <Header />
            <Dashboard />
            {dash.roster.length > 1 && <Roster />}
        </DashHolder.Provider>
    </div>

};

ReactDOM.render(<App />, document.getElementById("root"))


