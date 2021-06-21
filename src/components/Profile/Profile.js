import style from './Profile.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

function  Profile({ profile, status, updateStatus, id, isOwner, savePhoto, saveProfile, error}) {
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
      />
      {isOwner && <MyPostsContainer />}
    </div>
  );
};

export default Profile;
