import style from './Post.module.css';


function Post({ message }) {
  return (
    <>
      <div className={style.post}>
        <img className={style.avatar} src='https://static.mycity.travel/manage/uploads/7/36/112961/1/2500px-fribourgregion-20190704-dscf3505_3000.jpg' alt=''/>
        <p className={style.text}>{message}</p>
      </div>
    </>
  )
}

export default Post;