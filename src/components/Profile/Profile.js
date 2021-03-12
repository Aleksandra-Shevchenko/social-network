import style from './Profile.module.css';

import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function  Profile(props) {
  return (
    <div className={style.content}>
      <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} idAuthUser={props.id} />
      <MyPostsContainer />
    </div>
  )
}

export default Profile;
