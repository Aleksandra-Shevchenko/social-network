import style from './Friends.module.css';
import avatarDefault from "../../images/avatarDefault.svg";
import React from 'react';
import { NavLink } from 'react-router-dom';




function Friends(props) {

  const pagesCount = Math.ceil(props.totalFriendsCount / props.pageFriendsSize);
  const pages = [];

  for(let i = 1; i <= pagesCount; i++){
    pages.push(i);
  }

  return (
    <div>
      <div>
        {pages.map((p) => {
          return <button key={p}
              className={`${style.page} ${p === props.currentPage && style.page_active}`}
              onClick={() => {props.onPageChanged(p)}}>{p}
            </button>
          }
        )}
      </div>
      {props.friends.map((u) => {
        return (
          <div key={u.id}>
            <div>
              <NavLink to={'/profile/' + u.id}>
                <img src={!u.photos.small ? avatarDefault : u.photos.small} alt='' className={style.avatar}/>
              </NavLink>

              {u.followed 
                ? <button disabled={props.followingInProgress.some(id  => id === u.id)} onClick={() => props.unfollow(u.id)}>Unfollow</button>
                : <button disabled={props.followingInProgress.some(id  => id === u.id)} onClick={() => props.follow(u.id)}>Follow</button>}
            </div>
            <div>
              <p>{u.name}</p>
              <p>{u.status}</p>
              <p>{'u.location.city'}</p>
              <p>{'u.location.country'}</p>
            </div>
          </div>
        )
      })
      }
    </div>

  );
}

export default  Friends;