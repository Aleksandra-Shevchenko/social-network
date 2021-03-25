import './App.css';
import React from 'react';
import { Redirect, Route, withRouter } from 'react-router';
import { connect } from 'react-redux';
import { initializeApp } from './redux/appReducer'


import Navbar from "./components/Navbar/Navbar";
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import FriendsContainer from './components/Friends/FriendsContainer';
import Login from './components/Login/Login';
import Landing from './components/Landing/Landing';
import Preloader from './components/common/Preloader/Preloader';




class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }
  
  render() {
    if(!this.props.initialized){
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
                <ProfileContainer />
              </Route>
              <Route path='/dialogs'>
                <DialogsContainer />
              </Route>
              <Route path='/friends'>
                <FriendsContainer />
              </Route>
              <Route path='/news'>
                <News />
              </Route>
              <Route path='/settings'>
                <Settings />
              </Route>
              <Route path='/users'>
                <UsersContainer />
              </Route>
            </div>
          </>
        )}

        <div className='app-landing'>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Landing totalUsersCount={this.props.totalUsersCount}/>
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
  login: state.auth.login,
  authUserId: state.auth.id,
  initialized: state.app.initialized,
  totalUsersCount: state.usersPage.totalUsersCount,
});

export default connect(mapStateToProps, {initializeApp})(withRouter(App));
