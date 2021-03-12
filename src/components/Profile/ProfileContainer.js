import { connect } from 'react-redux';
import { getPersonalInfo, getStatus, updateStatus } from '../../redux/profileReducer';
import React from 'react';
import Profile from './Profile'
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import { compose } from 'redux';



class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId=this.props.match.params.userId;
    if (!userId) userId = 15519;
    this.props.getPersonalInfo(userId);
    this.props.getStatus(userId);
  }
            
  render() {
    return (
      <Profile {...this.props} />
    )
  } 
}


const mapStateToProps = (state) => ({ 
  profile: state.profilePage.profile,
  status: state.profilePage.status,
});


// const AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
// export default connect(mapStateToProps, {getPersonalInfo}) (withRouter(AuthRedirectComponent));

// мы заменили предыдущие вызовы ф-ий, одной ф-ей компоуз
export default compose(
  connect(mapStateToProps, {getPersonalInfo, getStatus, updateStatus}),
  withRouter,
  WithAuthRedirect
)(ProfileContainer);