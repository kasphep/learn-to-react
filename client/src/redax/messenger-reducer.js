const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const ADD_MESSAGE = 'ADD-MESSAGE';

export const messengerReducer = (state, action) => {

    if (action.type === ADD_MESSAGE) {
        state.messagesData.push({
            message: state.newMessageText,
        })
        state.newMessageText="";
    }
    if (action.type === UPDATE_NEW_MESSAGE_TEXT) {
        state.newMessageText = action.newText;
    }

    return state;
}

export default messengerReducer;