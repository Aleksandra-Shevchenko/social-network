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


function App() {
  return (
    <div className="App" >
        <HeaderContainer />
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
          <Route path='/login'>
            <Login />
          </Route>
        </div>
    </div>
  );
}

export default App;
