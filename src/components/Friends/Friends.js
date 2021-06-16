import style from './Friends.module.css';
import React from 'react';
import Pagination from '../Pagination/Pagination';
import UsersList from '../UsersList/UsersList';


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
      <UsersList
        users={friends}
        followingInProgress={followingInProgress}
        follow={follow}
        unfollow={unfollow}
        friend={true}
      />
      {/* {friends.map((user) => {
        return (
          <UserCard
            key={user.id} 
            user={user}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />
        )
      })} */}
    </div>
  );
};

export default  Friends;