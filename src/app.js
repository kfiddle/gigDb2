import React, { Component } from 'react';

import ReactDOM from "react-dom";
import TestHeader from "./components/TestHeader";
import Header from './components/header/Header';

const App = () => {


    return <div>
        <Header />
        <TestHeader/>
    </div>

};

ReactDOM.render(<App />, document.getElementById("root"))


