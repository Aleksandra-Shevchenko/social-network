import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import React from 'react';


function  Profile({ profile, status, updateStatus, id, isOwner, savePhoto, saveProfile, error}) {

  const [editMode, setEditMode] = React.useState(false);

  function handleActiveEditMode() {
    setEditMode(true);
  };

  function handleExitEditMode() {
    setEditMode(false);
  };

  return (
    <div className={style.content}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        idAuthUser={id}
        isOwner={isOwner}
        savePhoto={savePhoto}
        saveProfile={saveProfile} 
        error={error}
        handleExitEditMode={handleExitEditMode}
        handleActiveEditMode={handleActiveEditMode}
        editMode={editMode}
      />
      {(isOwner && !editMode) && <MyPostsContainer profile={profile}/>}
    </div>
  );
};

export default Profile;
