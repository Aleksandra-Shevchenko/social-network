import { usersApi } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS= 'SET_USERS';
const SET_FRIENDS = 'SET_FRIENDS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_CURRENT_FRIENDS_PAGE = 'SET_CURRENT_FRIENDS_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'; 
const SET_TOTAL_FRIENDS_COUNT = 'SET_TOTAL_FRIENDS_COUNT'; 

const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';



let inintialState = {
  users : [],
  pageSize: 100,
  totalUsersCount: 1,
  currentPage: 1,
  isFetching: false,
  followingInProgress: [],
  friends: [],
  currentFriendsPage: 1,
  pageFriendsSize: 10,
  totalFriendsCount: 0,

}

const userReducer = (state = inintialState, action) =>{
  switch (action.type) {
    case FOLLOW: 
      return {
        ...state,
        users: state.users.map(user => (user.id === action.userId) ? {...user, followed: true} :  user)
      };
    case UNFOLLOW: 
      return {
        ...state,
        users: state.users.map(user => (user.id === action.userId) ? {...user, followed: false} :  user)
      };
    case SET_USERS:
      return {...state, users: [...action.users]};

    case SET_FRIENDS:
      return {...state, friends: [...action.friends]};

    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.page};

    case SET_CURRENT_FRIENDS_PAGE:
      return {...state, currentFriendsPage: action.page};

    case SET_TOTAL_USERS_COUNT:
      return {...state, totalUsersCount: action.num};

    case SET_TOTAL_FRIENDS_COUNT:
      return {...state, totalFriendsCount: action.num};
      
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};

    case TOGGLE_IS_FOLLOWING_PROGRESS:
      return {...state,
        followingInProgress: action.progress
        ? [...state.followingInProgress, action.userId]
        : state.followingInProgress.filter(id => id !== action.userId)
      };

      default:
        return state;
  }
}

export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});

const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page});
export const setCurrentFriendsPage = (page) => ({type: SET_CURRENT_FRIENDS_PAGE, page});
export const setTotalUsersCount = (num) => ({type: SET_TOTAL_USERS_COUNT, num});

export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleFollowingProgress = (progress, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, progress, userId});

const setFriends = (friends) => ({type: SET_FRIENDS, friends});
export const setTotalFriendsCount = (num) => ({type: SET_TOTAL_FRIENDS_COUNT, num});





//ThunkCreator
export const getUsers = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersApi.getUsers(currentPage, pageSize)
    .then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUsersCount(data.totalCount));
    })
  }
} 

export const getUserFriends = (currentPage, pageSize) => {
  return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersApi.getFriends(currentPage, pageSize)
    .then(data => {
      dispatch(toggleIsFetching(false));
      dispatch(setFriends(data.items));
      dispatch(setTotalFriendsCount(data.totalCount));
    })
  }
} 

export const follow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersApi.followFriend(userId).then(() => {
      dispatch(followSuccess(userId));
      dispatch(toggleFollowingProgress(false, userId));
    })
  }
} 

export const unfollow = (userId) => {
  return (dispatch) => {
    dispatch(toggleFollowingProgress(true, userId));
    usersApi.unfollowFriend(userId).then(() => {
      dispatch(unfollowSuccess(userId));
      dispatch(toggleFollowingProgress(false, userId));
    })
  }
} 


export default userReducer;