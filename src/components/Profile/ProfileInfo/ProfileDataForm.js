import style from './ProfileDataForm.module.css';
import { profileFormSchema } from "../../../utils/validation/validationFormSchema";
import { Formik, Form, Field, ErrorMessage } from "formik";
import React from 'react';


function ProfileDataForm ({profile, error, saveProfile, idAuthUser, onEditMode}) {

  const handleSubmit = (values) => {
    saveProfile(values, idAuthUser)
      .then(()=>{
        onEditMode();
      })
    console.log(values);
  };

  const contacts = Object.keys(profile.contacts).reduce((obj, key) => {
    obj[key] = profile.contacts[key] ? profile.contacts[key] : '';
    return obj;
  }, {});

  console.log(contacts);

  return ( 
    <div className={style.profile_form_box}>
      <Formik
        initialValues={{ 
          fullName: profile.fullName,
          aboutMe: profile.aboutMe ? profile.aboutMe : "",
          lookingForAJobDescription: profile.lookingForAJobDescription ? profile.lookingForAJobDescription : "",
          lookingForAJob: profile.lookingForAJob,
          contacts: { ...contacts },
        }}
        validationSchema={profileFormSchema}
        onSubmit={handleSubmit}
      >



        {({ errors, touched, isValid, dirty }) => (
          <div className={style.container}>

            <button onClick={onEditMode} className={style.close_btn}></button>

            <Form className={style.form}>
              <h2 className={style.title}>Basic information</h2>

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
                    ${style.input_textarea}
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
                    ${style.input_textarea}
                    ${errors.lookingForAJobDescription && touched.lookingForAJobDescription ? style.input_error : null}
                  `}
                />
                <ErrorMessage name="lookingForAJobDescription" component="span" className={style.error}/>
              </div>
              
              <h2 className={style.title}>Career</h2>
              <div className={style.form_checkbox}>
                <label htmlFor="lookingForAJob" className={style.label}>Looking for a job</label>
                <Field type="checkbox" name="lookingForAJob" id="lookingForAJob" className={style.checkbox}/>
              </div>

              <h2 className={style.title}>Contacts</h2>
              <div>
              {Object.keys(profile.contacts).map((key) => {
                return (
                  <div className={style.form_row} key={key}>
                    <label htmlFor={'contacts.' + key} className={style.label}>{key}</label>
                      <Field type="text" name={'contacts.' + key} id={'contacts.' + key}
                        className={`
                        ${style.input}
                        ${errors['contacts.' + key] && touched['contacts.' + key] ? style.input_error : null}
                      `}
                    />
                    <ErrorMessage name={'contacts.' + key} component="span" className={style.error}/>
                  </div>
                )
                })}
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
            <button onClick={onEditMode} className={style.close}>Don't save changes. Exit edit mode.</button>
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

