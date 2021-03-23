import { Link } from 'react-router-dom';
import picture from '../../images/main-one.jpg';
import style from './Landing.module.css';



function Landing(props) {
    return (
     <div className={style.content}>
       <div className={style.introduce}>
        <div className={style.text_box}>
          <h1 className={style.title}>See the world of amazind travel</h1>
          <p className={style.subtitle}>Social network of travel lovers</p>
          <Link className={style.link}>Sign up</Link>
        </div>
       </div>
     </div>
    )
  }
  
  export default Landing;