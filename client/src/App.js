import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";


const App = ({state}) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header headerData = {state.Header}/>
                <Navbar navbarData = {state.Navbar}/>
                <Content contentData = {state.Content}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
