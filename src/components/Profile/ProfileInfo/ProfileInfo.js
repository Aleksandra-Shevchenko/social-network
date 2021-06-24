import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import avatarDefault from '../../../images/avatarDefault.svg';
import ProfileStatus from './ProfileStatus';
import ProfileDataForm from './ProfileDataForm';
import React from 'react';

import camera from '../../../images/camera.svg';

import facebook from '../../../images/facebook.svg';
import instagram from '../../../images/instagram.svg';
import youtube from '../../../images/youtube.svg';
import github from '../../../images/github.svg';
import mainLink from '../../../images/mainLink.svg';
import twitter from '../../../images/twitter.svg';
import vk from '../../../images/vk.svg';
import website from '../../../images/website.svg';

const icons = {
  'facebook' : facebook,
  'instagram' : instagram,
  'vk' : vk,
  'youtube' : youtube,
  'github' : github,
  'mainLink' : mainLink,
  'twitter' : twitter,
  'website' : website,
};

function ProfileInfo({
  profile,
  status,
  updateStatus,
  idAuthUser,
  isOwner,
  savePhoto,
  saveProfile,
  error,
  handleExitEditMode,
  editMode,
  handleActiveEditMode,
}) {

  function handlePhotoSelected(e) {
    if(e.target.files.length){
      savePhoto(e.target.files[0]);
    }
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
    <div className={style.icon_box}>
    {value ?  (<a href={value} target='_blank' rel='noreferrer' className={style.icon_link}>
      <img src={icons[title]} alt='social netwok' className={style.icon}/>
    </a>) : (<img src={icons[title]} alt='social netwok' className={style.icon_empty}
    />)}
    </div>
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
            noChanges={profile.userId !== idAuthUser && true}
          />
        </div>

        {isOwner ? (
          <button onClick={onEditMode} className={style.edit}>Edit</button>
        ) : (
          <div className={style.liner}></div>
        )}

        <div className={style.info}>

          <div>
            <h3 className={style.headline}>About me</h3>
            <p className={style.text}>{profile.aboutMe || 'no description'}</p>
          </div>

          <div>
            <h3 className={style.headline}>Professional skills</h3>
            <p className={style.text}>{profile.lookingForAJobDescription || 'no description'}</p>
          </div>

          <p className={style.text}>
            <span className={style.headline}>{profile.lookingForAJob ? 'Looking for a job' : 'Employed'}</span> 
          </p>

          <div className={style.contacts}>
            <h3 className={style.headline}>Contacts</h3>
            <div className={style.contacts_box}>
              {Object.keys(profile.contacts).map((key) => {
                return <Contact key={key} title={key} value={profile.contacts[key]}/>
              })}
            </div>
          </div>

        </div>

        {/* <div className={style.photos}>
          <img className={`${style.photo} ${!profile.photos.large && style.photo_default}`} src={profile.photos.large || camera} alt="#"/>
          <img className={`${style.photo} ${!profile.photos.small && style.photo_default}`} src={profile.photos.small || camera} alt=""/>
        </div> */}

      </div>
    </div>
  )
};


export default ProfileInfo;