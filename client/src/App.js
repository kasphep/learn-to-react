import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
