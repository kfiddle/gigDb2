import React, { Component } from 'react';

import ReactDOM from "react-dom";
import TestHeader from "./components/TestHeader";

const App = () => {


    return <div>
        <h1>Yo World</h1>
        <h3>From here, we have a bundle I hope</h3>
        <TestHeader/>
    </div>

};

ReactDOM.render(<App />, document.getElementById("root"))


