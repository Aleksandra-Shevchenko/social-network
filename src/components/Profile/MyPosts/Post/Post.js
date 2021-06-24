import style from './Post.module.css';
import avatarDefault from "../../../../images/avatarDefault.svg";



function Post({ message, profile }) {
  return (
    <div className={style.post}>
      <div className={style.post_box}>
        <img className={style.avatar} src={profile.photos.small} alt=''/>
        <p className={style.author}>{profile.fullName}</p>
      </div>
      <p className={style.text}>{message}</p>
    </div>
  )
}

export default Post;