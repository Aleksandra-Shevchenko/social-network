import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router';
import Header from './Header';
import { logout } from '../../redux/authReducer'


class HeaderContainer extends React.Component {

  constructor(props){
    super(props);
    this.authUserPhoto = props.photo;
  }


  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(this.authUserPhoto);

    if(this.props.authUserId !== prevProps.authUserId || !this.authUserPhoto){
      this.authUserPhoto = this.props.photo;
    }
  }
         
  render() {
    return <Header {...this.props} photo={this.authUserPhoto}/>
  }
}


const mapStateToProps = (state) => ({
  login: state.auth.login,
});


export default connect(mapStateToProps, {logout})(withRouter(HeaderContainer));