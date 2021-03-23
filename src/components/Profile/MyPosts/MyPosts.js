import React from 'react';

import style from './MyPosts.module.css';
import Post from './Post/Post';
import AddMessageForm  from "../../common/AddMessageForm/AddMessageForm";

// {profilePage, addPost}
function MyPosts(props) {

  function handleSubmit(value) {
    props.addPost(value.message);
  }

  return (
    <div className={style.myPosts_box}>
      <div>
        <h2 className={style.title}>My posts</h2>
        <AddMessageForm onSubmit={handleSubmit} style={style.form}/>
      </div>
      <div className='PostList'>
        {props.posts.map(p => <Post message={p.text} key={p.id}/>)}
      </div>
    </div>
  )
}

export default MyPosts;