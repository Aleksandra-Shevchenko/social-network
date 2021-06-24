const SEND_MESSAGE = 'dialogs/SEND-MESSAGE';

const inintialState = {
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
};

const dialogsReducer = (state = inintialState, action) =>{
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {id: '6', text: action.newText}],
      };
    default:
      return state;
  }
}

export const sendMessageActionCreator = (text) => ({type: SEND_MESSAGE, newText: text});

export default dialogsReducer;