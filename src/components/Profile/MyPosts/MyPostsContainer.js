import { connect } from 'react-redux';
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";



const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostTex: state.profilePage.newPostTex,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    onPostChange: (text) =>{
      dispatch(updateNewPostTextActionCreator(text));
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);