const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


const defaultState = {
    newPostText: "",
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
};

export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_POST: {
            state.postsData.push({
                id: "0003",
                img: "./temporaryServer/Posts/Zhnec/img.png",
                message: state.newPostText,
                likes: "0",
            });
            state.newPostText = "";
            return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            state.newPostText = action.newText;
            return state
        }
        default:
            return state
    }
}

export default profileReducer;