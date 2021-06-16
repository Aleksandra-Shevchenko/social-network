import style from './UsersList.module.css';
import React from 'react';
import UserCard from '../UserCard/UserCard';


function UsersList({
  users,
  followingInProgress,
  unfollow,
  follow,
  friend,
}) {

  return (
    <div className={style.list}>
      {users.map((user) => {
        return (
          <UserCard
            key={user.id} 
            user={user}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
            friend={friend}
          />)
        })
      }
    </div>
  );
};

export default UsersList;