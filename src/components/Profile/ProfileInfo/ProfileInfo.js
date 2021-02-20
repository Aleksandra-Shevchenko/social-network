import style from './ProfileInfo.module.css';


function ProfileInfo(params) {
  return (
    <div className={style.profile_info}>
      <div>
        <img className={style.picture} src='https://www.legrandbornand-reservation.com/medias/images/prestations/multitailles/1200x900_1920x1440-141600-021-gb-via-ferrata-143085.jpg' alt=''/>
      </div>
      <div className={style.description_box}>
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;