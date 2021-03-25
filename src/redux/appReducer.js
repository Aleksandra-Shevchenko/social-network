import { getAuthUser } from "./authReducer";
import { getUsers } from "./userReducer";

const SET_INITIALIZED = 'SET_INITIALIZED';

let inintialState = {
  initialized: false,
};

const setInitialized = () => ({type: SET_INITIALIZED});


const appReducer = (state = inintialState, action) =>{
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
}
}


export const initializeApp = () => {
  return (dispatch) => {
    dispatch(getUsers());
    dispatch(getAuthUser())
      .then(() => {
        dispatch(setInitialized());
      })
  }
}


export default appReducer;