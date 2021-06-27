import React from 'react';
import style from './ProfileStatus.module.css';

function ProfileStatus(props) {

  const [editMode, setEditMode] = React.useState(false);
  const [status, setStatus] = React.useState(props.status);

  function activateEditMode() {
    if(props.noChanges){
      setEditMode(false);
      return;
    }
    setEditMode(true);
  };

  function deactivateEditMode() {
    setEditMode(false);
    if(props.status !== status){
      props.updateStatus(status);
    }
  };

  function handleChangeStatus(e) {
    setStatus(e.currentTarget.value);
  };

  React.useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  
  return (
    <div className={style.status_box}>
      {editMode ? (
        <textarea
          autoFocus={true}
          onBlur={deactivateEditMode}
          value={status}
          onChange={handleChangeStatus}
          className={style.status_input}
        />
        ) : (
          <p onClick={activateEditMode}
            className={`${style.status} ${!props.noChanges && style.hover} ${!props.status && style.no_status}`}
          >
            {props.status || `➜ Set status`}
          </p>
        )
      }
    </div>
  );
};
  
export default ProfileStatus;
