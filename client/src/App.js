import React from 'react';
import {BrowserRouter} from "react-router-dom";
import './App.css';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Content from "./components/Content/Content";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header headerData = {props.state.Header}/>
                <Navbar navbarData = {props.state.Navbar}/>
                <Content contentData = {props.state.Content} addPost = {props.addPost} updateNewPostText = {props.updateNewPostText}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
