import logoLink from '../../images/logo.svg';
import avatarDefault from "../../images/avatarDefault.svg";
import avatarNotAuth from "../../images/user.svg";
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';


function Header({ isAuth, login, logout }) {
  return (
    <header className={style.header}>
      <div className={style.logo_box}>
        <img className={style.logo} src={logoLink} alt=''/>
        <p className={style.logo_text}>TravelBook</p>
      </div>

      {!isAuth && (
        <div className={style.user_box}>
          <img className={`${style.avatar} ${!isAuth ? style.avatarNotAuth : ''}`} src={avatarNotAuth} alt=""/>
          <NavLink className={style.login} to={'/login'}>Sign in</NavLink>
        </div>
      )}

      <div className={isAuth ? style.user_box : style.hidden_box}>
        <p className={style.name}>{login}</p>
        <img className={style.avatar} src={isAuth ? avatarDefault : avatarNotAuth} alt=""/>
        <button className={style.logout} onClick={logout} type='button'></button>
      </div>
    </header>
  )
}

export default Header;