import style from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';
import camera from '../../../images/camera.svg';
import avatarDefault from '../../../images/avatarDefault.svg';
import ProfileStatus from './ProfileStatus';




function ProfileInfo(props) {

  if(!props.profile){
    return <Preloader />
  }

  return (
    <div className={style.profile_info}>
      <div>
        <img className={`${style.user_photo} ${!props.profile.photos.large && style.user_photoDefault}`} src={props.profile.photos.large || avatarDefault } alt='#'/>
      </div>
      <div className={style.description_box}>
        <div className={style.main_info}>
          <h2 className={style.header} >{props.profile.fullName}</h2>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}
            noChanges={props.profile.userId !== props.idAuthUser && true} />
        </div>
        <div className={style.info}>
          <p className={style.text}>
            <span className={style.headline}>About me: </span> 
            {props.profile.aboutMe || 'no description'}
          </p>
          <p className={style.text}>
            <span className={style.headline}>{props.profile.lookingForAJob ? 'Looking for a job: ' : 'Employed: '}</span> 
            {props.profile.lookingForAJobDescription || 'no description'}
          </p>
        </div>
        <div className={style.photos}>
          <img className={`${style.photo} ${!props.profile.photos.large && style.photo_default}`} src={props.profile.photos.large || camera} alt="#"/>
          <img className={`${style.photo} ${!props.profile.photos.small && style.photo_default}`} src={props.profile.photos.small || camera} alt=""/>
        </div>
        
      </div>
    </div>
  )
}

export default ProfileInfo;