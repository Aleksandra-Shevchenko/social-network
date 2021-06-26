import { authApi, securityApi } from "../api/api";
import { getPersonalInfo } from "./profileReducer";


const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA';
const SET_ERROR= 'auth/SET_ERROR';
const GET_CAPTCHA_URL= 'auth/GET_CAPTCHA_URL';

let inintialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
  error: '',
  captchaUrl: null,
};

const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA , data: data});
const setError = (err) => ({type: SET_ERROR , errorMessage: err});
const setCaptchaUrl = (url) => ({type: GET_CAPTCHA_URL , captchaUrl: url});

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

    case GET_CAPTCHA_URL:
      return {
        ...state,
        captchaUrl: action.captchaUrl,
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

export const getCaptchaUrl = () => {
  return async (dispatch) => {
    const res = await securityApi.getCaptchaUrl();
    const captchaUrl = res.data.url;
    console.log(captchaUrl);
    dispatch(setCaptchaUrl(captchaUrl));
  }
};

export const login = (values) => {
  return async (dispatch) => {
    const res = await authApi.login(values);
    if (!res.data.resultCode) {
      dispatch(getAuthUser())
        .then((res) => {
          if(res) {
            dispatch(getPersonalInfo(res.id))
          }
        });
      dispatch(setError(''));
      return Promise.resolve(res.data);
    } else {
      if (res.data.resultCode === 10 ) {
        dispatch(getCaptchaUrl());
      } 
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
        isAuth: false,
        error: '',
        captchaUrl: null,
      }));
    }
  }
};

export default authReducer;