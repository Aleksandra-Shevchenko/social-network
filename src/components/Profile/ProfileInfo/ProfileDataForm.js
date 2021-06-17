import style from './ProfileDataForm.module.css';
// import loginFormSchema from "../../utils/validation/LoginFormSchema";


import { Formik, Form, Field, ErrorMessage } from "formik";


function ProfileDataForm ({profile, error, saveProfile, idAuthUser}) {
  console.log(profile);

    
  const handleSubmit = (values) => {
    saveProfile(values, idAuthUser);
    console.log(values);
  };

  return ( 
    <div className={style.login_box}>
      <Formik
        initialValues={{ 
          fullName: profile.fullName,
          aboutMe: profile.aboutMe ? profile.aboutMe : "",
          lookingForAJobDescription: profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "",
          lookingForAJob: profile.lookingForAJob,
        }}
        // validationSchema={loginFormSchema}
        onSubmit={handleSubmit}
      >

        {({ errors, touched, isValid, dirty }) => (
          <div className={style.container}>
            <h1 className={style.title}>HH</h1>
            <Form className={style.form}>
              <div className={style.form_row}>
                <label htmlFor="fullName" className={style.label}>Full name</label>
                <Field type="text" name="fullName" id="fullName"
                  className={`
                    ${style.input}
                    ${errors.fullName && touched.fullName ? style.input_error : null}
                  `}
                />
                <ErrorMessage name="fullName" component="span" className={style.error} />
              </div>
              
              <div className={style.form_row}>
                <label htmlFor="aboutMe" className={style.label}>About me</label>
                <Field  as="textarea" type="text" name="aboutMe" id="aboutMe"
                  className={`
                    ${style.input}
                    ${errors.aboutMe && touched.aboutMe ? style.input_error : null}
                  `}
                />
                <ErrorMessage name="aboutMe" component="span" className={style.error}/>
              </div>

              <div className={style.form_row}>
                <label htmlFor="lookingForAJobDescription" className={style.label}>Professional skills</label>
                <Field  as="textarea" type="text" name="lookingForAJobDescription" id="lookingForAJobDescription"
                  className={`
                    ${style.input}
                    ${errors.lookingForAJobDescription && touched.lookingForAJobDescription ? style.input_error : null}
                  `}
                />
                <ErrorMessage name="lookingForAJobDescription" component="span" className={style.error}/>
              </div>
              
              <div className={style.form_checkbox}>
                <label htmlFor="lookingForAJob" className={style.label}>Looking for a job</label>
                <Field type="checkbox" name="lookingForAJob" id="lookingForAJob" className={style.checkbox}/>
              </div>

              <button type="submit"
                className={`${style.btn} ${!(dirty && isValid) ? style.btn_disabled : ""}`}
                disabled={!(dirty && isValid)}
              >
                Save
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
  );
};

// const mapStateToProps = (state) => {
//   return {
//     isAuth: state.auth.isAuth,
//     error: state.auth.error,
//   }
// };

// export default connect(mapStateToProps, {ProfileDataForm})(withRouter(ProfileDataForm));

export default ProfileDataForm;

