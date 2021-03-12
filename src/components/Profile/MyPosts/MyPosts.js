import React from 'react';

import style from './MyPosts.module.css';
import Post from './Post/Post';

// {profilePage, addPost, onPostChange}
function MyPosts(props) {
  const newPostRef = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    props.addPost();
  }

  function handleChangeInput() {
    const text = newPostRef.current.value;
    props.onPostChange(text);
  }

  // debugger;
  return (
    <div className={style.myPosts_box}>
      <div>
        <h2 className={style.title}>My posts</h2>
        <form className={style.form} onSubmit={handleSubmit} >
          <textarea ref={newPostRef} value={props.newPostText} onChange={handleChangeInput}></textarea>
          <button type='submit'>Save</button>
        </form>
      </div>
      <div className='PostList'>
        {props.posts.map(p => <Post message={p.text} key={p.id}/>)}
      </div>
    </div>
  )
}

export default MyPosts;