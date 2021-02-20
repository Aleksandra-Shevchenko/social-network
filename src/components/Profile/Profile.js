import style from './Profile.module.css';

import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function Profile({posts}) {
  return (
    <div className={style.content}>
      <ProfileInfo />
      <MyPosts posts={posts}/>
    </div>
  )
}

export default Profile;