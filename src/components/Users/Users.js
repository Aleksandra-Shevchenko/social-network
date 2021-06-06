import style from './Users.module.css';
import React from 'react';
import Pagination from '../Pagination/Pagination';
import UserCard from '../UserCard/UserCard';


function Users({
  totalUsersCount,
  pageSize,
  currentPage,
  onPageChanged,
  users,
  followingInProgress,
  unfollow,
  follow
}) {

  return (
    <div>
      <Pagination
        totalCount={totalUsersCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onClick={onPageChanged}
      />
      {users.map((user) => {
        return (
          <UserCard
            key={user.id} 
            user={user}
            followingInProgress={followingInProgress}
            follow={follow}
            unfollow={unfollow}
          />)
        })
      }
    </div>
  );
};

export default Users;