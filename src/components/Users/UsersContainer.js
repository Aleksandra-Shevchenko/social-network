import { connect } from "react-redux";
import { follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers } from "../../redux/userReducer";
import React from 'react';
import Users from "./Users";
import Preloader from '../common/Preloader/Preloader';
import { WithAuthRedirect } from "../../hoc/WithAuthRedirect";
import { compose } from "redux";




class UsersContainer extends React.Component {

  componentDidMount() {
    if(this.props.users.length === 0){
      this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }
  }
    
  onPageChanged = (pageNum) => {
    this.props.setCurrentPage(pageNum);
    this.props.getUsers(pageNum, this.props.pageSize);
  }

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : <Users {...this.props} onPageChanged={this.onPageChanged}/>}
      </>
    );
  }
  
}




const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  }
}


export default compose(
  connect(mapStateToProps, {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
  }),
  WithAuthRedirect
)(UsersContainer);



//теперь передаем вместо функции mapDispatchToProps передаем объект,
//ф-ия connect сама возьмет этот объект и сгененирурет коллбэки которые мы реньше прописывали в mapDispatchToProps

// const AuthRedirectComponent = WithAuthRedirect(UsersContainer);


// export default  connect(mapStateToProps, {
//   follow,
//   unfollow,
//   setCurrentPage,
//   toggleFollowingProgress,
//   getUsers,
// })(AuthRedirectComponent);


// const mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => {
//       dispatch(followAC(userId));
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowAC(userId));
//     },
//     setUsers: (users) => {
//       dispatch(setUsersAC(users));
//     },
//     setCurrentPage: (pageNum) => {
//       dispatch(setCurrentPageAC(pageNum));
//     },
//     setTotalUsersCount: (totalCount) => {
//       dispatch(setTotalUsersCountAC(totalCount));
//     },
//     toggleIsFetching: (isFetching) => {
//       dispatch(toggleIsFetchingAC(isFetching));
//     }
//   }
// }