import React from 'react';
import './App.css';
import SearchPage from "./SearchPage";
import {BrowserRouter, Route} from "react-router-dom";
import Add from "./Add";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Route exact path="/" component={SearchPage}/>
                <Route path="/add" component={Add}/>
            </BrowserRouter>
        </div>
    );
}

export default App;