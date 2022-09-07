import React from 'react';

const Header = () => {
    return (
        <div>
            <a>Home</a>
            <a>News Feed</a>
            <a>Messages</a>
        </div>
    )
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>js</li>
                <li>react</li>
            </ul>
        </div>
    )
}


const App = () => {
    return (
        <div className="App">
            <Header />
            <Technologies />
        </div>
    );
}

export default App;
