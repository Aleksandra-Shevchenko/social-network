import style from './Friends.module.css';
import React from 'react';
import Pagination from '../Pagination/Pagination';
import UserCard from '../UserCard/UserCard';


function Friends({
  totalFriendsCount,
  pageFriendsSize,
  currentFriendsPage,
  onPageChanged,
  friends,
  followingInProgress,
  unfollow,
  follow,
}) {


  return (
    <div>
      <Pagination
        totalCount={totalFriendsCount}
        pageSize={pageFriendsSize}
        currentPage={currentFriendsPage}
        onClick={onPageChanged}
      />
      {friends.map((user) => {
        return (
          <UserCard
            key={user.id} 
            user={user}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        )
      })}
    </div>
  );
};

export default  Friends;