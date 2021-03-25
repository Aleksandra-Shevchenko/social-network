import logoLink from '../../images/logo.svg';
import avatarDefault from "../../images/avatarDefault.svg";
import avatarNotAuth from "../../images/user.svg";
import style from './Header.module.css';
import {Link} from 'react-router-dom';


function Header({ isAuth, login, logout}) {
  return (
    <header className={style.header}>
      <div className={style.logo_box}>
        <img className={style.logo} src={logoLink} alt=''/>
        <Link to={isAuth ? '/profile' : '/'} className={style.logo_text}>TravelBook</Link>
      </div>

      {!isAuth && (
        <div className={style.user_box}>
          <img className={`${style.avatar} ${style.avatarNotAuth}`} src={avatarNotAuth} alt=""/>
          <Link className={style.login} to='/'>Sign up</Link>
        </div>
      )}

      <div className={isAuth ? style.user_box : style.hidden_box}>
        <p className={style.name}>{login}</p>
        <img className={style.avatar} src={avatarDefault} alt=""/>
        <button className={style.logout} onClick={logout} type='button'></button>
      </div>
    </header>
  )
}

export default Header;