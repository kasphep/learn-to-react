import React from 'react';

const App = () => {
    return (
        <div className="App">
            <header className='header'>
                <img src = 'https://cdn.dribbble.com/userupload/3158902/file/original-7c71bfa677e61dea61bc2acd59158d32.jpg?resize=400x0'/>
            </header>
            <nav className='nav'>
                <div>
                    <a>Profile</a>
                </div>
                <div>
                    <a>Messages</a>
                </div>
                <div>
                    <a>News</a>
                </div>
                <div>
                    <a>Music</a>
                </div>
                <div>
                    <a>Settings</a>
                </div>
            </nav>
            <div className='content'>
                <div>
                    <img src = 'https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300'/>
                </div>
                <div>
                    <img className = 'ava' src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Circle-icons-image.svg/2048px-Circle-icons-image.svg.png'/> description
                </div>
                <div>
                    my posts
                    <div>
                        new post
                    </div>
                    <div>
                        post....s...
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
