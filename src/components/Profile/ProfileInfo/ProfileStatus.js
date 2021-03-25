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
  }

  function deactivateEditMode() {
    setEditMode(false);
    props.updateStatus(status);
  }

  function handleChangeStatus(e) {
    setStatus(e.currentTarget.value);
  }

  React.useEffect(() => {
    setStatus(props.status);
    console.log('обновилась')
  }, [props.status])

  
  return (
  <div className={style.profile_status}>
  {editMode ? (
    <div>
      <input autoFocus={true} onBlur={deactivateEditMode} value={status} onChange={handleChangeStatus} />
    </div>
    ) : (
      <div>
        <p onClick={activateEditMode}>{props.status || 'No status'}</p>
      </div>
    )}
  </div>
  )
}
  
  export default ProfileStatus;