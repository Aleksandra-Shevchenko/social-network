import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import camera from '../../../images/camera.svg';
import avatarDefault from '../../../images/avatarDefault.svg';
import ProfileStatus from './ProfileStatus';


function ProfileInfo({ profile, status, updateStatus, idAuthUser, isOwner, savePhoto}) {

  function handlePhotoSelected(e) {
    if(e.target.files.length){
      savePhoto(e.target.files[0])
    }
  }


  if(!profile){
    return <Preloader />
  }

  return (
    <div className={style.profile_info}>
      <div className={style.photo_box}>
        <img className={`${style.user_photo} ${!profile.photos.large && style.user_photoDefault}`} src={profile.photos.large || avatarDefault } alt='#'/>
        {isOwner && (
          <input
            type={'file'}
            onChange={handlePhotoSelected} 
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
        <div className={style.info}>
          <p className={style.text}>
            <span className={style.headline}>About me: </span> 
            {profile.aboutMe || 'no description'}
          </p>
          <p className={style.text}>
            <span className={style.headline}>{profile.lookingForAJob ? 'Looking for a job: ' : 'Employed: '}</span> 
            {profile.lookingForAJobDescription || 'no description'}
          </p>
        </div>
        <div className={style.photos}>
          <img className={`${style.photo} ${!profile.photos.large && style.photo_default}`} src={profile.photos.large || camera} alt="#"/>
          <img className={`${style.photo} ${!profile.photos.small && style.photo_default}`} src={profile.photos.small || camera} alt=""/>
        </div>
        
      </div>
    </div>
  );
};

export default ProfileInfo;