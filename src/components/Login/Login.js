import { Formik, Form, Field, ErrorMessage } from "formik";
import loginFormSchema from "./LoginFormSchema";
import {login} from '../../redux/authReducer';
import { connect } from 'react-redux';
import { Redirect } from "react-router";
import style from './Login.module.css';


function Login(props) {

  const submit = (values) => {
    console.log(values);
    props.login(values);
  }

  if(props.isAuth){
    return <Redirect to='profile'/>
  }

  return (
    <div>
      <Formik
        initialValues={{ 
          email: "",
          password: "",
          rememberMe: false 
        }}
        validationSchema={loginFormSchema}
        onSubmit={submit}
      >

        {({ errors, touched, isValid, dirty }) => (
          <div className={style.container}>
            <h1 className={style.title}>Sign in to continue</h1>
            <Form className={style.form}>
              <div className={style.form_row}>
                <label for="email" className={style.label}>Email</label>
                <Field type="email" name="email" id="email"
                  className={`${style.input} ${errors.email && touched.email ? style.input_error : null}`}
                />
                <ErrorMessage name="email" component="span" className={style.error} />
              </div>
              
              <div className={style.form_row}>
                <label for="password" className={style.label}>Password</label>
                <Field type="password" name="password" id="password"
                  className={`${style.input} ${errors.password && touched.password ? style.input_error : null}`}
                />
                <ErrorMessage name="password" component="span" className={style.error}/>
              </div>
              
              <div className={style.form_checkbox}>
                <label for="rememberMe" className={style.label}>Remember me</label>
                <Field type="checkbox" name="rememberMe" id="rememberMe" className={style.checkbox}/>
              </div>

              <button type="submit"
                className={`${style.btn} ${!(dirty && isValid) ? style.btn_disabled : ""}`}
                disabled={!(dirty && isValid)}
              >
                Sign in
              </button>
            </Form>
          </div>
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