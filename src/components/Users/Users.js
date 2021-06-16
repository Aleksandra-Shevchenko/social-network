import style from './Users.module.css';
import React from 'react';
import Pagination from '../Pagination/Pagination';
import UsersList from '../UsersList/UsersList';


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
      <UsersList
        users={users}
        followingInProgress={followingInProgress}
        follow={follow}
        unfollow={unfollow}
      />
    </div>
  );
};

export default Users;