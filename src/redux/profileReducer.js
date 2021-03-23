import { profileApi, usersApi } from "../api/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let inintialState = {
  posts: [
    {id: '1', text: 'How are you?'},
    {id: '2', text: 'Hellow world!'},
    {id: '3', text: 'Hi'},
  ],
  profile: null,
  status: '',
}

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
       
      default:
        return state;
  }
}

export const addPostActionCreator = (text) => ({type: ADD_POST, newText: text});

const setUserProfile = (profile) => ({type: SET_USER_PROFILE,  profile: profile});
const setStatus = (status) => ({type: SET_STATUS,  status: status});

//thunkCreator из него возращаем непосредственно нашу thunk
export const getPersonalInfo = (userId) => {
  return (dispatch) => {
    usersApi.getUserInfo(userId).then(data => {
        dispatch(setUserProfile(data));
    })
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileApi.getStatus(userId).then(res => {
        dispatch(setStatus(res.data));
    })
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileApi.updateStatus(status).then(res => {
      if(!res.data.resultCode){
        dispatch(setStatus(status));
      }
    })
  }
}

export default profileReducer;