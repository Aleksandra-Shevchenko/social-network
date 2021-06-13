import style from './UsersCard.module.css';
import avatarDefault from "../../images/avatarDefault.svg";
import React from 'react';
import { NavLink } from 'react-router-dom';


function UserCard({ user, followingInProgress, follow, unfollow }) {

  return (
    <>
      <div>
        <NavLink to={'/profile/' + user.id}>
          <img src={!user.photos.small ? avatarDefault : user.photos.small} alt='' className={style.avatar}/>
        </NavLink>

        {user.followed 
          ? <button
              disabled={followingInProgress.some(id  => id === user.id)}
              onClick={() => unfollow(user.id)}
            >
              Unfollow
            </button>
          : <button 
              disabled={followingInProgress.some(id  => id === user.id)}
              onClick={() => follow(user.id)}
            >
              Follow
            </button>}
      </div>
      <div>
        <p>{user.name}</p>
        <p>{user.status}</p>
      </div>
    </>
  );
};

export default UserCard;