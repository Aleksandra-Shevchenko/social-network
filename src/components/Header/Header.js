import logoLink from '../../images/logo.svg';
import avatarDefault from "../../images/avatarDefault.svg";
import style from './Header.module.css';
import {NavLink} from 'react-router-dom';


function Header(props) {
  return (
    <header className={style.header}>
      <div className={style.logo_box}>
        <img className={style.logo} src={logoLink} alt=''/>
        <p className={style.logo_text}>TravelBook</p>
      </div>

      {!props.isAuth && <NavLink to={'/login'}>Login</NavLink> }

      <div className={props.isAuth ? style.user_box : style.hidden_box}>
        <p className={style.name}>{props.login}</p>
        <img className={style.avatar} src={avatarDefault} alt=""/>
        <button className={style.logout} onClick={props.logout} type='button'></button>
      </div>
    </header>
  )
}

export default Header;