import { connect } from "react-redux";
import { follow, unfollow, setCurrentFriendsPage, toggleFollowingProgress, getUserFriends } from "../../redux/userReducer";
import React from 'react';
import Friends from "./Friends";
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';
import { withRouter } from "react-router";
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";


// class FriendsContainer extends React.Component {

//   componentDidMount() {
//     this.props.getUserFriends(this.props.currentFriendsPage, this.props.pageFriendsSize);
//   };

//   // componentDidUpdate() {
//   //   this.props.getUserFriends(this.props.currentFriendsPage, this.props.pageFriendsSize);
//   // };
    
//   onPageChanged = (pageNum) => {
//     this.props.setCurrentFriendsPage(pageNum);
//     this.props.getUserFriends(pageNum, this.props.pageFriendsSize);
//   };

//   render() {
//     return (
//       <>
//         {this.props.isFetching ? <Preloader /> : <Friends {...this.props} onPageChanged={this.onPageChanged}/>}
//       </>
//     );
//   };
// }

function FriendsContainer({currentFriendsPage, pageFriendsSize, getUserFriends, setCurrentFriendsPage, ...props}) {

  const [isUnfollow, setIsUnfollow] = React.useState(false);

  const onPageChanged = (pageNum) => {
    setCurrentFriendsPage(pageNum);
    getUserFriends(pageNum, pageFriendsSize);
  };

  const handleClick = () => {
    setIsUnfollow(true);
  }

  React.useEffect(() => {
      getUserFriends(currentFriendsPage, pageFriendsSize);
  }, []);
  
  React.useEffect(() => {
    if(isUnfollow) {
      getUserFriends(currentFriendsPage, pageFriendsSize);
      setIsUnfollow(false);
    }
  }, [isUnfollow]);

  return (
    <>
      {props.isFetching ? <Preloader /> : <Friends {...props}
        onPageChanged={onPageChanged}
        onUnfollowClick={handleClick}
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


//теперь передаем вместо функции mapDispatchToProps передаем объект,
//ф-ия connect сама возьмет этот объект и сгененирурет коллбэки которые мы реньше прописывали в mapDispatchToProps

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
