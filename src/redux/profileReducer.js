import { profileApi, usersApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let inintialState = {
  posts: [
    {id: '1', text: 'How are you?'},
    {id: '2', text: 'Hellow world!'},
    {id: '3', text: 'Hi'},
  ],
  profile: null,
  status: '',
};

const profileReducer = (state = inintialState, action) =>{
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        posts: [...state.posts, {id: 4, text: action.newText}],
      };

    case SET_USER_PROFILE:
      return {...state, profile: action.profile};

    case SET_STATUS:
      return {...state, status: action.status};

    case SAVE_PHOTO_SUCCESS:
      return {...state, profile: {...state.profile, photos: action.photos}};
      
    default:
      return state;
  }
};

export const addPostActionCreator = (text) => ({type: ADD_POST, newText: text});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE,  profile: profile});
const setStatus = (status) => ({type: SET_STATUS,  status: status});
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

//thunkCreator из него возращаем непосредственно нашу thunk
export const getPersonalInfo = (userId) => {
  return async (dispatch) => {
    const data = await usersApi.getUserInfo(userId);
    dispatch(setUserProfile(data));
  }
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    const res = await profileApi.getStatus(userId);
    dispatch(setStatus(res.data));
  }
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    const res = await profileApi.updateStatus(status);
    if (!res.data.resultCode) {
      dispatch(setStatus(status));
    }
  }
};

export const savePhoto = (file) => {
  return async (dispatch) => {
    const res = await profileApi.savePhoto(file);
    if (!res.data.resultCode) {
      dispatch(savePhotoSuccess(res.data.data.photos));
    }
  }
};

export const saveProfile = (values, userId) => {
  return async (dispatch) => {
    const res = await profileApi.saveProfile(values);
    if (!res.data.resultCode) {
      dispatch(getPersonalInfo(userId));
    }
  }
};

export default profileReducer;