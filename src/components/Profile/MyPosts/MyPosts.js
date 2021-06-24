import React from 'react';

import style from './MyPosts.module.css';
import Post from './Post/Post';
import AddMessageForm  from "../../common/AddMessageForm/AddMessageForm";

// {profilePage, addPost}
function MyPosts({addPost, profile, posts}) {

  function handleSubmit(value) {
    addPost(value.message);
  }

  return (
    <div className={style.myPosts_box}>
      <AddMessageForm onSubmit={handleSubmit} style={style.form}/>
      <div className='PostList'>
        <h2 className={style.title}>My posts</h2>
        {posts.map(p => <Post message={p.text} key={p.id} profile={profile}/>)}
      </div>
    </div>
  )
}

export default MyPosts;