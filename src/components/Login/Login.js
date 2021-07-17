import { Formik, Form, Field, ErrorMessage } from "formik";
import { loginFormSchema } from "../../utils/validation/validationFormSchema";
import {login, setError} from '../../redux/authReducer';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import style from './Login.module.css';
import React from 'react';


function Login({ login, error, captchaUrl, setError }) {

  React.useEffect(() => {
    setError('');
  }, [])

  const handleSubmit = (values, { resetForm, setSubmitting }) => {
    login(values)
      .then((res) => {
        if (res) resetForm();
        setSubmitting(false);
      })
      .catch(() => {
        setSubmitting(false);
      })
  };

  return (
    <div className={style.login_box}>
      <Formik
        initialValues={{ 
          email: "",
          password: "",
          rememberMe: false,
          captcha: "",
        }}
        validationSchema={loginFormSchema}
        onSubmit={handleSubmit}
      >

        {({ errors, touched, isValid, dirty, isSubmitting }) => (
          <div className={style.container}>
            <h1 className={style.title}>Sign in to continue</h1>
            <Form className={style.form}>
              <div className={style.form_row}>
                <label htmlFor="email" className={style.label}>Email</label>
                <Field
                  type="email"
                  name="email"
                  id="email"
                  className={`
                    ${style.input}
                    ${errors.email && touched.email ? style.input_error : null}
                  `}
                />
                <ErrorMessage name="email" component="span" className={style.error} />
              </div>
              
              <div className={style.form_row}>
                <label htmlFor="password" className={style.label}>Password</label>
                <Field
                  type="password"
                  name="password"
                  id="password"
                  className={`
                    ${style.input}
                    ${errors.password && touched.password ? style.input_error : null}
                  `}
                />
                <ErrorMessage name="password" component="span" className={style.error}/>
              </div>
              
              <div className={style.form_checkbox}>
                <label htmlFor="rememberMe" className={style.label}>Remember me</label>
                <Field type="checkbox" name="rememberMe" id="rememberMe" className={style.checkbox}/>
              </div>


              {captchaUrl && (
                <>
                  <h3 className={style.title_captcha}>Please enter the characters as they are shown in the image</h3>
                  <div className={style.captcha_box}>
                    <img src={captchaUrl} alt='captcha' className={style.captcha_pic}/>
                    <div className={style.form_row}>
                      <label htmlFor="captcha" className={`${style.label} ${style.label_empty}`}></label>
                      <Field
                        type="text"
                        name="captcha"
                        id="captcha"
                        className={`
                          ${style.input}
                          ${style.captcha_input}
                          ${errors.captcha && touched.captcha ? style.input_error : null}
                        `}
                      />
                      <ErrorMessage name="captcha" component="span" className={style.error}/>
                    </div>
                  </div>
                </>)
              }

              <button type="submit"
                className={`${style.btn} ${!(dirty && isValid) || isSubmitting ? style.btn_disabled : ""}`}
                disabled={!(dirty && isValid) || isSubmitting}
              >
                Sign in
              </button>

              {error ? (
                <div className={style.server_errorContainer}>
                  <p className={style.server_error}>{`Something wrong!`}</p>
                  <p className={style.server_error}>{error}</p>
                </div>
              ) : null}
            </Form>
          </div>
        )}

      </Formik>
    </div>
  )
};


const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    error: state.auth.error,
    captchaUrl: state.auth.captchaUrl,
  }
};

export default connect(mapStateToProps, {login, setError})(withRouter(Login));