import style from "./Dialog.module.css";

import { NavLink } from 'react-router-dom';


function Dialog ({ name, id }) {
  return (
    <li className={style.dialog}>
      <NavLink to={`/dialogs/${id}`} className={style.link} activeClassName={style.active}>{name}
      </NavLink>
    </li>
  )
}

export default Dialog;