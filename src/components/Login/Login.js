import { Formik, Form, Field, ErrorMessage } from "formik";
// import { authApi } from "../../api/api";
// import loginFormSchema from "../FormValidation/LoginFormSchema";
import {login} from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from "react-router";


function Login(props) {

  const submit = (values, { setSubmitting }) => {
    console.log(values);
    props.login(values);
  }

  if(props.isAuth){
    return <Redirect to='profile'/>
  }


  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ 
          email: "",
          password: "",
          rememberMe: false 
        }}
        onSubmit={submit}>

        {({ isSubmitting }) => (
          <Form>
            <Field type="email" name="email" />
            <Field type="password" name="password" />
            <label>
              <Field type="checkbox" name="rememberMe" />
              remember me
            </label>
            <button type="submit" disabled={isSubmitting}>
             Submit
            </button>
         </Form>
        )}
      </Formik>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  }
}

export default connect(mapStateToProps, {login})(Login);