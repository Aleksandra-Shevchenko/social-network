import { connect } from 'react-redux';
import { addPostActionCreator } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
    newPostTex: state.profilePage.newPostTex,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (text) => {
      dispatch(addPostActionCreator(text));
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);