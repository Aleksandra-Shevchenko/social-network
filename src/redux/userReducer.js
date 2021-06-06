import { usersApi } from "../api/api";
import { updateObjectInArr } from "../utils/utils";

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

const inintialState = {
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
};

const userReducer = (state = inintialState, action) =>{
  switch (action.type) {
    case FOLLOW: 
      return {
        ...state,
        users: updateObjectInArr(state.users, action.userId, 'id', {followed: true}),
      };
    case UNFOLLOW: 
      return {
        ...state,
        users: updateObjectInArr(state.users, action.userId, 'id', {followed: false}),
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
};

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

// общие вспомогательные ф-ии
const getUsersOrFriends = async (dispatch, page, pageSize, apiMethod, actionCreatorSetItems, actionCreatorTotalCount) => {
  dispatch(toggleIsFetching(true));
  const data = await apiMethod(page, pageSize);
  dispatch(toggleIsFetching(false));
  dispatch(actionCreatorSetItems(data.items));
  dispatch(actionCreatorTotalCount(data.totalCount));
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator) => {
  dispatch(toggleFollowingProgress(true, userId));
  const res = await apiMethod(userId);
  if (!res.data.resultCode) {
    dispatch(actionCreator(userId));
  }
  dispatch(toggleFollowingProgress(false, userId));
};

// ThunkCreators
export const getUsers = (page, pageSize) => {
  return async (dispatch) => {
    const apiMethod = usersApi.getUsers.bind(usersApi);
    getUsersOrFriends(dispatch, page, pageSize, apiMethod, setUsers, setTotalUsersCount);
  }
};

export const getUserFriends = (page, pageSize) => {
  return async (dispatch) => {
    const apiMethod = usersApi.getFriends.bind(usersApi);
    getUsersOrFriends(dispatch, page, pageSize, apiMethod, setFriends, setTotalFriendsCount);
  }
};

export const follow = (userId) => {
  return async (dispatch) => {
    const apiMethod = usersApi.followFriend.bind(usersApi);
    followUnfollowFlow(dispatch, userId, apiMethod, followSuccess);
  }
};

export const unfollow = (userId) => {
  return async (dispatch) => {
    const apiMethod = usersApi.unfollowFriend.bind(usersApi);
    followUnfollowFlow(dispatch, userId, apiMethod, unfollowSuccess);
    // getUserFriends(inintialState.currentFriendsPage, inintialState.pageFriendsSize);

      // const arr = inintialState.friends.filter((item) => {
      //   return item.id !== userId;
      // })
      // dispatch(setFriends(arr));
      // dispatch(setTotalFriendsCount(arr.length));
  }
};

export default userReducer;