import style from "./Message.module.css";


function Message ({ text }) {
  return (
    <div className={style.message_box}>
      <img className={style.avatar} src='https://static.mycity.travel/manage/uploads/7/36/112961/1/2500px-fribourgregion-20190704-dscf3505_3000.jpg' alt=''/>
      <p className={style.text}>{text}</p>
    </div>
  )
}
  

export default Message;