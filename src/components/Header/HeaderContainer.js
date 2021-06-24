import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router';
import Header from './Header';
import { logout } from '../../redux/authReducer'


class HeaderContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      photo: null,
      name: '',
    }
  }

  componentDidMount() {
    if(this.props.profile){
      this.setState({
        photo: this.props.photo,
        name: this.props.fullName,
      });
    }
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.props.profile) {
      if (this.props.profile.userId === this.props.authUserId && (
        (this.props.fullName !== prevProps.fullName) || (this.props.photo !== prevProps.photo)
      )){
        this.setState({
          name: this.props.fullName,
          photo: this.props.photo,
        });
      }
    }
  }
       
  render() {
    return <Header {...this.props} photo={this.state.photo} name={this.state.name}/>
  }
}


const mapStateToProps = (state) => ({
  login: state.auth.login,
});


export default connect(mapStateToProps, {logout})(withRouter(HeaderContainer));