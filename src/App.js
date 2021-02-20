import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Settings from './components/Settings/Settings';


function App({ state }) {
  return (
    <div className="App" >
      <BrowserRouter>
        <Header />
        <Navbar />
        <div class='app-content'>
          <Route path='/profile'>
            <Profile  posts={state.profilePage} />
          </Route>
          <Route path='/dialogs'>
            <Dialogs dialogs={state.dialogsPage} />
          </Route>
          <Route path='/news'>
            <News />
          </Route>
          <Route path='/settings'>
            <Settings />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
