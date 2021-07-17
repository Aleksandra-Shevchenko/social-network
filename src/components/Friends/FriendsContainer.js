import { connect } from "react-redux";
import { follow, unfollow, setCurrentFriendsPage, toggleFollowingProgress, getUserFriends } from "../../redux/userReducer";
import React from 'react';
import Friends from "./Friends";
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withRouter } from "react-router";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";


function FriendsContainer({currentFriendsPage, pageFriendsSize, getUserFriends, setCurrentFriendsPage, ...props}) {

  const onPageChanged = (pageNum) => {
    if(pageNum !== currentFriendsPage){
      setCurrentFriendsPage(pageNum);
      getUserFriends(pageNum, pageFriendsSize);
    }
  };

  React.useEffect(() => {
    getUserFriends(currentFriendsPage, pageFriendsSize);
  }, []);

  React.useEffect(() => {
    if(props.friends.length < pageFriendsSize){
      getUserFriends(currentFriendsPage, pageFriendsSize);
    }
  }, [getUserFriends, currentFriendsPage, pageFriendsSize, props.friends.length]);

  return (
    <>
      {props.isFetching ? <Preloader /> : <Friends {...props}
        onPageChanged={onPageChanged}
        currentFriendsPage={currentFriendsPage}
        pageFriendsSize={pageFriendsSize}
      />}
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    totalFriendsCount: state.usersPage.totalFriendsCount,
    pageFriendsSize: state.usersPage.pageFriendsSize,
    currentFriendsPage: state.usersPage.currentFriendsPage,
    friends: state.usersPage.friends,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
};


// compose - ф-ия принимающая несколько параметров через , эти параметры являются функциями,
// и возвращаемое значение первой ф-ии станет, аргументом второй и т.д. слева на право;

// ф-ия connect - дает возможность компоненте взять данные из store,
// connect(mstp, mdtp)(component) - это HOC, она вызывает subscribe - подписывается на изменение контекста,
// когда state меняется, она будет вызывать ф-ию mstp, если новый объект из mstp не равен предыдущему store,
// то произойдет render component.
// теперь, вместо функции mapDispatchToProps передаем объект,
// connect сама возьмет этот объект и сгененирурет коллбэки которые мы реньше прописывали в mapDispatchToProps;

export default compose(
  connect(mapStateToProps, {
    setCurrentFriendsPage,
    getUserFriends,
    follow,
    unfollow,
    toggleFollowingProgress,
  }),
  withRouter,
  WithAuthRedirect
)(FriendsContainer);
