import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router';
import Header from './Header';
import { logout } from '../../redux/authReducer'


class HeaderContainer extends React.Component {
         
  render() {
    return <Header {...this.props} />
  }
}


const mapStateToProps = (state) => ({
  login: state.auth.login,
});


export default connect(mapStateToProps, {logout})(withRouter(HeaderContainer));