import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const dataApp = {
    Header: {},
    Navbar: {},
    Content: {
        Profile: {
            postsData: [
                {
                    id: "0001",
                    img: "./temporaryServer/Posts/Veshiy/img.png",
                    message: "My first pictures, Veshiy!",
                    likes: "10",
                },
                {
                    id: "0002",
                    img: "./temporaryServer/Posts/Demon/img.png",
                    message: "My second result of working. You likes Demon?",
                    likes: "2",
                }
            ],
            userData: [
                {
                    id: "001",
                    obl: "./temporaryServer/Users/001/obl.jpg",
                    ava: "./temporaryServer/Users/001/ava.png",
                    name: "Hella Tendy",
                },
                {
                    id: "002",
                    obl: './obl.jpg',
                    ava: './ava.png',
                    name: 'Alchimik',
                }
            ],
        },
        Messenger: {
            dialogsData: [
                {
                    id: "001",
                    name: "Hella",
                },
                {
                    id: "002",
                    name: "Alchymick",
                }
            ],
            messagesData: [
                {
                    message: "Hi!"
                },
                {
                    message: "Hi?"
                },
            ],
        },
        News: {},
        Music: {},
        Settings: {}
    },
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App dataApp={dataApp}/>
    </React.StrictMode>
);
