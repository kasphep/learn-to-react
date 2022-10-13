export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const GET_ONE_USER = 'GET-ONE-USER';
export const SET_ALL_USERS = 'SET-ALL-USERS';



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
            obl: "http://localhost:4444/85aab997-35ba-4952-b4a2-68308e2d8b68.png",
            ava: "http://localhost:4444/d01e1857-4d44-4073-8405-105a7cd4d43e.png",
            name: "Hella Tendy",
        },
        {
            id: "002",
            obl: 'http://localhost:4444/c167d9aa-b9f8-4f83-995e-936672cbce55.png',
            ava: 'http://localhost:4444/f0ae0535-551b-477c-9828-0583a8db9dcf.png',
            name: 'Alchimik',
        }
    ],
};

export const profileReducer = (state = defaultState, action) => {
    switch (action.type) {
        case SET_ALL_USERS: {
            console.log(action.payload);
            return state;
        }
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
            return state;
        }
        default:
            return state;
    }
}

export default profileReducer;