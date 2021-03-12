import React from 'react';

import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";



function Dialogs({ dialogsPage, onMessageChange, onSendMessage }) {
 
  function handleSubmit(e) {
    e.preventDefault();
    onSendMessage();
    // dispatch(sendMessageActionCreator());
  }

  function handleChangeInput(e) {
    let text = e.target.value;
    onMessageChange(text);
    // dispatch(updateNewMessageTextActionCreator(text));
  }

  return (
    <div className={style.dialogs}>
      <ul className={style.dialogs_list}>
        {dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>)}
      </ul>

      <div className={style.messages}>
        {dialogsPage.messages.map(m => <Message text={m.text} key={m.id}/>)}
        <form className={style.form} onSubmit={handleSubmit}>
          <textarea type='text' value={dialogsPage.newMessageText} placeholder='Enter your message' onChange={handleChangeInput}></textarea>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Dialogs;