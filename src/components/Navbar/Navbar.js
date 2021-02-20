import style from './Navbar.module.css';
import { NavLink } from 'react-router-dom';



function Navbar(props) {
  return (
    <div className={style.menu}>
      <nav className={style.menu_nav}>
        <ul className={style.menu_list}>
          <li className={style.item}><NavLink to='/profile' className={style.link} activeClassName={style.active}>Profile</NavLink></li>
          <li className={style.item}><NavLink to='/dialogs' className={style.link} activeClassName={style.active}>Messages</NavLink></li>
          <li className={style.item}><NavLink to='/news' className={style.link} activeClassName={style.active}>News</NavLink></li>
          <li className={style.item}><NavLink to='/settings' className={style.link} activeClassName={style.active}>Settings</NavLink></li>
        </ul>
      </nav>

      <div>
        <h2>Friends</h2>
      </div>

    </div>
  )
}

export default Navbar;