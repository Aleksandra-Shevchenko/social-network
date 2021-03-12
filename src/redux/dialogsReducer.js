const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let inintialState = {
  messages:   [
    {id: '1', text: 'Hi'},
    {id: '2', text: 'How are you?'},
    {id: '3', text: `Hellow world! Hellow world! Hellow world!}Hellow world! Hellow world!
    Hellow world! Hellow world!`}
  ],
  dialogs : [
    {id: '1', name: 'Sasha'},
    {id: '2', name: 'Kolya'},
    {id: '3', name: 'Sveta'},
    {id: '4', name: 'Tanya'},
    {id: '5', name: 'Medok'},
  ],
  newMessageText: '',
};

const dialogsReducer = (state = inintialState, action) =>{
  switch (action.type) {
      case SEND_MESSAGE:
        return {
          ...state,
          newMessageText: '',
          messages: [...state.messages, {id: '6', text: state.newMessageText}],
        };
      case UPDATE_NEW_MESSAGE_TEXT:
        return {
          ...state,
          newMessageText: action.newText,
        };
      default:
        return state;
  }
}


export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});

export default dialogsReducer;