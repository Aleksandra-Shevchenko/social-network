import React from 'react';

import style from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";


function Dialogs({ dialogs }) {

  const newMessageRef = React.useRef();

  const sendMessage = () => {
    alert(newMessageRef);
  }

  return (
    <div className={style.dialogs}>
      <ul className={style.dialogs_list}>
        {dialogs.dialogs.map(d => <Dialog name={d.name} id={d.id}/>)}
      </ul>

      <div className={style.messages}>
        {dialogs.messages.map(m => <Message text={m.text}/>)}
        <from class={style.form}>
          <textarea type='text' ref={newMessageRef}></textarea>
          <button type='submit' onClick={sendMessage}>Send</button>
        </from>
      </div>
    </div>
  )
}

export default Dialogs;