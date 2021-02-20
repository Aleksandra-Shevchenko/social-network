import React from 'react';

import style from './MyPosts.module.css';
import Post from './Post/Post';



function MyPosts({posts}) {

  const newPostRef = React.useRef();

  const addNewPost = () => {
    alert(newPostRef);
  }


  return (
    <div class={style.myPosts_box}>
      <div>
        <h2 class={style.title}>My posts</h2>
        <from class={style.form}>
          <textarea type='text' ref={newPostRef}></textarea>
          <button type='submit' onClick={addNewPost}>Save</button>
        </from>
      </div>
      <div className='PostList'>
        {posts.posts.map(p => <Post message={p.text}/>)}
      </div>
    </div>

  )
}

export default MyPosts;