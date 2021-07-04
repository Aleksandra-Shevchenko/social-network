import './App.css';
import React, { Suspense } from 'react';
import { Redirect, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer'
import Navbar from "./components/Navbar/Navbar";
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import HeaderContainer from './components/Header/HeaderContainer';
import Landing from './components/Landing/Landing';
import Preloader from './components/common/Preloader/Preloader';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
const FriendsContainer = React.lazy(() => import('./components/Friends/FriendsContainer'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));
const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Login = React.lazy(() => import('./components/Login/Login'));

class App extends React.Component {

  catchAllUnhandleErrors = (promiseRejectionEvent) => {
    //задиспатичить ошибку в app редьюсер и вывести красиво
    // alert(promiseRejectionEvent);
    console.log(promiseRejectionEvent);
  }

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandleErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandleErrors);
  }
  
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="App" >
        <HeaderContainer {...this.props} />
  
        {this.props.isAuth &&  (
          <>
            <Navbar />
            <div className='app-content'>
              <Route path='/profile/:userId?'>
                <Suspense fallback={<Preloader/>}>
                  <ProfileContainer />
                </Suspense>
              </Route>
              <Route exact path='/'>
                <Redirect to='/profile' />
              </Route>
              <Route path='/dialogs'>
                <Suspense fallback={<Preloader/>}>
                  <DialogsContainer />
                </Suspense>
              </Route>
              <Route path='/friends'>
                <Suspense fallback={<Preloader/>}>
                  <FriendsContainer />
                </Suspense>
              </Route>
              <Route path='/news'>
                <News />
              </Route>
              <Route path='/settings'>
                <Settings />
              </Route>
              <Route path='/users'>
               <Suspense fallback={<Preloader/>}>
                <UsersContainer />
              </Suspense>
              </Route>
            </div>
          </>
        )}

        <div className='app-landing'>
          <Route exact path='/login'>
            {this.props.isAuth 
              ? <Redirect to='/profile' />
              : <Suspense fallback={<Preloader/>}><Login /></Suspense>
            }
          </Route>

          <Route exact path='/'>
            {!this.props.isAuth && <Landing totalUsersCount={this.props.totalUsersCount}/>}
          </Route>
        </div>

        <Route>
          {this.props.isAuth ? (
            <Redirect to='/profile'/>
          ) : (
            <Redirect to='/'/>
          )}
        </Route>

      </div>
  )};
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  profile: state.profilePage.profile,
  photo: state.profilePage.profile ? state.profilePage.profile.photos.small : null,
  fullName: state.profilePage.profile ? state.profilePage.profile.fullName : null,
  login: state.auth.login,
  authUserId: state.auth.id,
  initialized: state.app.initialized,
  totalUsersCount: state.usersPage.totalUsersCount,
});

export default connect(mapStateToProps, {initializeApp})(withRouter(App));
