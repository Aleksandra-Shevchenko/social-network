import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import email from '../../images/email.svg';
import settings from '../../images/settings.svg';
import friends from '../../images/friends.svg';
import user from '../../images/user.svg';
import news from '../../images/news.svg';



function Navbar(props) {
  return (
    <div className={style.menu}>
      <nav className={style.menu_nav}>
        <ul className={style.menu_list}>
          <li className={style.item}>
            <NavLink to='/profile' className={style.link} activeClassName={style.active}>Profile
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink to='/dialogs' className={style.link} activeClassName={style.active}>
              <img className={style.picture} src={email} alt=""/>
              Messanger
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink to='/friends' className={style.link} activeClassName={style.active}>
              <img className={style.picture} src={friends} alt=""/>
              Friends
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink to='/users' className={style.link} activeClassName={style.active}>
              <img className={style.picture} src={user} alt=""/>
              Users
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink to='/news' className={style.link} activeClassName={style.active}>
              <img className={style.picture} src={news} alt=""/>
              News
            </NavLink>
          </li>
          <li className={style.item}>
            <NavLink to='/settings' className={style.link} activeClassName={style.active}>
              <img className={style.picture} src={settings} alt=""/>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;