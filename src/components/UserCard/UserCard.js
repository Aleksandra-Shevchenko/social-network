import style from './UsersCard.module.css';
import avatarDefault from "../../images/avatarDefault.svg";
import React from 'react';
import { NavLink } from 'react-router-dom';


function UserCard({ user, followingInProgress, follow, unfollow, friend }) {

  return (
    <div className={style.card}>
      <div className={style.avatar_box}>
        <NavLink to={'/profile/' + user.id}>
            <img src={!user.photos.small ? avatarDefault : user.photos.small} alt='user' className={style.avatar}/>
        </NavLink>
      </div>
      <div className={style.info_box}>
        <p className={style.name}>{user.name}</p>
        {friend && (<p className={style.status}>{user.status}</p>)}
        {user.followed 
          ? <button
              disabled={followingInProgress.some(id  => id === user.id)}
              onClick={() => unfollow(user.id)}
              className={`${style.button} ${style.button_delete}`}
            >
              Unfollow
            </button>
          : <button 
              disabled={followingInProgress.some(id  => id === user.id)}
              onClick={() => follow(user.id)}
              className={`${style.button} ${style.button_add}`}
            >
              Follow
            </button>
        }
      </div>
    </div>
  );
};

export default UserCard;