import { connect } from 'react-redux';
import { getPersonalInfo, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profileReducer';
import React from 'react';
import Profile from './Profile'
import { withRouter } from 'react-router';
import { WithAuthRedirect } from '../../hoc/WithAuthRedirect';
import Preloader from '../common/Preloader/Preloader';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) userId = this.props.id;

    Promise.all([
      this.props.getPersonalInfo(userId),
      this.props.getStatus(userId),
    ])
  }

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.match.params.userId !== prevProps.match.params.userId){
      this.refreshProfile();
    }
  }
            
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : <Profile {...this.props} isOwner={!this.props.match.params.userId}/>}
      </>
    )
  }
};


const mapStateToProps = (state) => ({ 
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  error: state.profilePage.error,
  isFetching: state.profilePage.isFetching,
  isSaving: state.profilePage.isSaving,
});


// const AuthRedirectComponent = WithAuthRedirect(ProfileContainer);
// export default connect(mapStateToProps, {getPersonalInfo}) (withRouter(AuthRedirectComponent));

// мы заменили предыдущие вызовы ф-ий, одной ф-ей компоуз
export default compose(
  connect(mapStateToProps, {getPersonalInfo, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
  WithAuthRedirect
)(ProfileContainer);