import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import camera from '../../../images/camera.svg';
import avatarDefault from '../../../images/avatarDefault.svg';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';
import React from 'react';



function ProfileInfo({ profile, status, updateStatus, idAuthUser, isOwner, savePhoto, saveProfile, error}) {

  const [editMode, setEditMode] = React.useState(false);

  function handlePhotoSelected(e) {
    if(e.target.files.length){
      savePhoto(e.target.files[0]);
    }
  };

  function handleActiveEditMode() {
    setEditMode(true);
  };

  function handleExitEditMode() {
    setEditMode(false);
  };


  if(!profile){
    return <Preloader />
  };

  return (
    <>
      {editMode ? (
        <ProfileDataForm profile={profile} isOwner={isOwner} saveProfile={saveProfile} idAuthUser={idAuthUser} onEditMode={handleExitEditMode} error={error}/>
        ) : (
          <ProfileData
            profile={profile}
            isOwner={isOwner}
            onEditMode={handleActiveEditMode}
            onChangePhoto={handlePhotoSelected}
            status={status}
            updateStatus={updateStatus}
            idAuthUser={idAuthUser}
          />
        )}
    </>
  );
};

const Contact = ({title, value}) => {
  return (
    <div>{title}: {value}</div>
  )
};

const ProfileData = ({profile, isOwner, onChangePhoto, onEditMode, status, updateStatus, idAuthUser, }) => { 
  return (
    <div className={style.profile_info}>
      <div className={style.photo_box}>
        <img className={`${style.user_photo} ${!profile.photos.large && style.user_photoDefault}`} src={profile.photos.large || avatarDefault } alt='#'/>
        {isOwner && (
          <input
            type={'file'}
            onChange={onChangePhoto} 
            className={style.change_photo}
          />
        )}
      </div>
      <div className={style.description_box}>
        <div className={style.main_info}>
          <h2 className={style.header} >{profile.fullName}</h2>
          <ProfileStatus status={status} updateStatus={updateStatus}
            noChanges={profile.userId !== idAuthUser && true} />
        </div>

        {isOwner && <button onClick={onEditMode}>Edit</button>}

        <div className={style.info}>
          <p className={style.text}>
            <span className={style.headline}>About me: </span> 
            {profile.aboutMe || 'no description'}
          </p>
          <p className={style.text}>
            <span className={style.headline}>{profile.lookingForAJob ? 'Looking for a job' : 'Employed'}</span> 
          </p>
          <p className={style.text}>
            <span className={style.headline}>Professional skills: </span> 
            {profile.lookingForAJobDescription || 'no description'}
          </p>
          <div> Contacts : {Object.keys(profile.contacts).map((key) => {
            return <Contact key={key} title={key} value={profile.contacts[key]}/>
            })}
          </div>
        </div>
        <div className={style.photos}>
          <img className={`${style.photo} ${!profile.photos.large && style.photo_default}`} src={profile.photos.large || camera} alt="#"/>
          <img className={`${style.photo} ${!profile.photos.small && style.photo_default}`} src={profile.photos.small || camera} alt=""/>
        </div>
      </div>
    </div>
  )
};


export default ProfileInfo;