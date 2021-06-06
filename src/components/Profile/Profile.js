import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function  Profile({ profile, status, updateStatus, id}) {
  return (
    <div className={style.content}>
      <ProfileInfo profile={profile} status={status} updateStatus={updateStatus} idAuthUser={id} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
