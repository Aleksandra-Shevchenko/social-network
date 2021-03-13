import { authApi } from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA ';


let inintialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false,
  isFetching: false,
};

const authReducer = (state = inintialState, action) =>{
  switch (action.type) {
      case SET_AUTH_USER_DATA:
        return {
          ...state,
          ...action.data,
        };
      default:
        return state;
  }
}


const setAuthUserData = (data) => ({type: SET_AUTH_USER_DATA , data: data});


export const getAuthUser = () => {
  return (dispatch) => {
    authApi.authUser()
    .then(res => {
      if(!res.data.resultCode){
        dispatch(setAuthUserData({...res.data.data, isAuth: true}));
      }
    })
  }
}

export const login = (values) => {
  return (dispatch) => {
    authApi.login(values)
    .then(res => {
      if(!res.data.resultCode){
        console.log('dispatch')
        dispatch(getAuthUser())
      }
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    authApi.logout()
    .then(res => {
      if(!res.data.resultCode){
        dispatch(setAuthUserData({
          id: null,
          email: null,
          login: null,
          isAuth: false
        }));
      }
    })
  }
}



export default authReducer;