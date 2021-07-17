import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
// необходим для того что бы store мог понимать, пришел ему action или функция
import thunkMiddleware from "redux-thunk";
import appReducer from "./appReducer";

const reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  usersPage: userReducer,
  auth: authReducer,
  app: appReducer,
});

// compose - ф-ия принимающая несколько параметров через , эти параметры являются функциями,
// и возвращаемое значение первой ф-ии станет, аргументом второй и т.д. слева на право
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));


// store нам доступен из контекста, для этого App мы оборачиваем провайдером
export default store;