import dialogsReducer from "./dialogsReducer";
import profileReducer from "./profileReducer";

// учебный store для понимания работы redux
const store ={
  _state: {
    profilePage : {
      posts : [
        {id: '1', text: 'How are you?'},
        {id: '2', text: 'Hellow world!'},
        {id: '3', text: 'Hi'},
      ],
      newPostText: '',
    },
  
    dialogsPage : {
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
    }
  },
  _callSubscriber () {
    console.log('State changed');
  },

  getState() {
    return this._state;
  },

  subscribe (observer) {
    this._callSubscriber = observer;
  },

  dispatch(action){
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._callSubscriber(this._state);
  },
};

// паттерн observer - наблюдатель, это ф-ия. Мы ее экспортируем туда, где хотим ей отдать другую ф-нию. Мы хотим этого наблюдателя вызывать когда-то что- то произошло

export default store;
window.store = store;