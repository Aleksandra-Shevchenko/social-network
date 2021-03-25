import { Link } from 'react-router-dom';
import style from './Landing.module.css';



function Landing(props) {
  
  const showNum = () => {
    const n = String(props.totalUsersCount).split('').reverse().join('');
    const result = n.slice(0, 3) + ' ' + n.slice(3);
    return result.split('').reverse().join('');
  }

    return (
     <div className={style.content}>
       <div className={style.introduce}>
        <div className={style.text_box}>
          <h1 className={style.title}>See the world of amazind travel</h1>
          <p className={style.subtitle}>Social network of travel lovers</p>
          <Link to='/login' className={style.link}>Sign in</Link>
        </div>
       </div>
       <div className={style.data}>
         <div className={style.data_item}>
            <p className={style.data_nums}>{showNum()}</p>
           <div className={style.liner}></div>
           <p className={style.data_text}>registered<br/>users</p>
         </div>
         <div className={style.data_item}>
           <p className={style.data_nums}>5 300</p>
           <div className={style.liner}></div>
           <p className={style.data_text}>reviews from<br/>different countries</p>
         </div>
         <div className={style.data_item}>
           <p className={style.data_nums}>54 008</p>
           <div className={style.liner}></div>
           <p className={style.data_text}>beautiful<br/>user photo</p>
         </div>
       </div>
     </div>
    )
  }
  
  export default Landing;