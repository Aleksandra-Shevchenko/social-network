import { authApi } from "../api/api";

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const SET_ERROR= 'auth/SET_ERROR';

let inintialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  error: '',
};

const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA , data: data});
const setError = (err) => ({type: SET_ERROR , errorMessage: err});

const authReducer = (state = inintialState, action) => {
  switch (action.type) {
    case SET_AUTH_USER_DATA:
      return {
        ...state,
        ...action.data,
        error: '',
      };

    case SET_ERROR:
      return {
        ...state,
        error: action.errorMessage,
      };

    default:
      return state;
  }
};

export const getAuthUser = () => {
  return async (dispatch) => {
    const res = await authApi.authUser();
    if (!res.data.resultCode) {
      dispatch(setAuthUserData({...res.data.data, isAuth: true}));
      return res.data.data;
    }
  }
};

export const login = (values) => {
  return async (dispatch) => {
    const res = await authApi.login(values);
    if (!res.data.resultCode) {
      dispatch(getAuthUser());
    } else {
      dispatch(setError(res.data.messages[0]));
    }
  }
};

export const logout = () => {
  return async (dispatch) => {
    const res = await authApi.logout();
    if (!res.data.resultCode) {
      dispatch(setAuthUserData({
        id: null,
        email: null,
        login: null,
        isAuth: false
      }));
    }
  }
};

export default authReducer;