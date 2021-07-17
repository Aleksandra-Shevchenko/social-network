import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const mapStateToPropsForRedirect = (state) => ({ 
  isAuth: state.auth.isAuth,
  id: state.auth.id,
});


export const WithAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) return <Redirect to={'/login'}/>
      return <Component {...this.props} />
    }
  }

 // оборачиваем RedirectComponent в HOC, первый вызов connect возращает функцию - HOC и ее надо вызвать передав ей наш базовый компонент
  const ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

  return ConnectedAuthRedirectComponent;
}