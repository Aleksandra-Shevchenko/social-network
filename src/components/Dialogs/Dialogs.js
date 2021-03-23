import React from 'react';

import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessageForm from '../common/AddMessageForm/AddMessageForm';


function Dialogs({ dialogsPage, onSendMessage }) {
 
  function handleSubmit(values) {
    onSendMessage(values.message);
  }

  return (
    <div className={style.dialogs}>
      <ul className={style.dialogs_list}>
        {dialogsPage.dialogs.map(d => <Dialog name={d.name} id={d.id} key={d.id}/>)}
      </ul>

      <div className={style.messages}>
        {dialogsPage.messages.map(m => <Message text={m.text} key={m.id}/>)}
        <AddMessageForm onSubmit={handleSubmit} style={style.form}/>
      </div>
    </div>
  )
}

export default Dialogs;