import { profileApi, usersApi } from "../api/api";

const ADD_POST = 'profile/ADD-POST';
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE';
const SET_STATUS = 'profile/SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'profile/SAVE_PHOTO_SUCCESS';
const SET_ERROR= 'profile/SET_ERROR';
const TOGGLE_IS_FETCHING = 'profile/TOGGLE_IS_FETCHING';
const TOGGLE_IS_SAVING = 'profile/TOGGLE_IS_SAVING';


let inintialState = {
  posts: [
    {id: '1', text: 'How are you?'},
    {id: '2', text: 'Hellow world!'},
    {id: '3', text: 'Hi'},
  ],
  profile: null,
  status: '',
  error: '',
  isFetching: false,
  isSaving: false,
};


// reducer это чистая функция, которая принимает стейт и экшен и возращает новый стейт
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

    case SET_ERROR:
      return {...state, error: action.errorMessage};
  
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching};

    case TOGGLE_IS_SAVING:
      return {...state, isSaving: action.isSaving};
      
    default:
      return state;
  }
};

// actionCreator - это вспомогательная функция, которая возвращает объект action,
// необходима, что бы action не создавался внутри react (UI)
export const addPostActionCreator = (text) => ({type: ADD_POST, newText: text});
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching});
export const toggleIsSaving = (isSaving) => ({type: TOGGLE_IS_SAVING, isSaving});
const setUserProfile = (profile) => ({type: SET_USER_PROFILE,  profile: profile});
const setStatus = (status) => ({type: SET_STATUS,  status: status});
const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
const setError = (err) => ({type: SET_ERROR , errorMessage: err});


// thunk - это ф-ия, которая выполняет какую-то асинхронную операцию и умеет диспатчить экшены,в парметрах принимает ф-ию dispatch
// и саму ф-ию thunk можно задиспатчить и store ее запустит, а не отправит по редьюсерам.
// thunkCreator - мы диспатчим вызов этой ф-ии (store ее вызывает), 
// что бы иметь возможность диспатчить другие эшены внутри thunk из замыкания.
// из ф-ии thunkCreator возращаем непосредственно нашу thunk
export const getPersonalInfo = (userId) => {
  return async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await usersApi.getUserInfo(userId);
    dispatch(setUserProfile(data));
    dispatch(toggleIsFetching(false));
  }
};

export const getStatus = (userId) => {
  return async (dispatch) => {
    try {
      const res = await profileApi.getStatus(userId);
      dispatch(setStatus(res.data));
    } catch(err) {
      //задиспатчить ошибку и вывести
    }
  }
};

export const updateStatus = (status) => {
  return async (dispatch) => {
    dispatch(setStatus('Saving...'));
    const res = await profileApi.updateStatus(status);
    if (!res.data.resultCode) {
      dispatch(setStatus(status));
    }
  }
};

export const savePhoto = (file) => {
  return async (dispatch) => {
    dispatch(toggleIsSaving(true));
    const res = await profileApi.savePhoto(file);
    if (!res.data.resultCode) {
      dispatch(savePhotoSuccess(res.data.data.photos));
    }
    dispatch(toggleIsSaving(false));
  }
};

export const saveProfile = (values, userId) => {
  return async (dispatch) => {
    const res = await profileApi.saveProfile(values);
    if (!res.data.resultCode) {
      dispatch(getPersonalInfo(userId));
    } else {
      dispatch(setError(res.data.messages[0]));
      return Promise.reject(res.data.messages[0]);
    }
  }
};

export default profileReducer;