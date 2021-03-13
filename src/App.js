import './App.css';
import { Route } from 'react-router-dom';

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




function App() {

  return (
    <div className="App" >
        <HeaderContainer />

        {true &&  (
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
        

        {false && (
          <div className='app-landing'>
          <Route path='/login'>
            <Login />
          </Route>
          <Route exact path='/'>
            <Landing />
          </Route>
        </div>
        )}
        
       
    </div>
  );
}

export default App;
