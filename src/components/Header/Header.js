import logoLink from '../../images/logo.png';
import style from './Header.module.css';


function Header(params) {
  return (
    <header className={style.header}>
      <img className={style.logo} src={logoLink} alt=''/>
    </header>
  )
}

export default Header;