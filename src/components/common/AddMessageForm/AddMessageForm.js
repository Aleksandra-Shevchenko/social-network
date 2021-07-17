import { Field, Form, Formik, ErrorMessage } from 'formik';
import style from './AddMessageForm.module.css';


function AddMessageForm({error, onSubmit}) {
  const submit = (values, actions) => {
    onSubmit(values);
    actions.setFieldValue("message", "");
    actions.setSubmitting(false);
  }
  
  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={submit}
    >
      {({ isSubmitting, errors, touched, isValid, dirty }) => (
        <Form className={style.form}>
          <h2 className={style.title}>Create post</h2>
          <Field  as="textarea" name="message" id="message" placeholder='Enter your post'
          className={`
            ${style.input}
            ${errors.fullName && touched.fullName ? style.input_error : null}`}
          />
          <ErrorMessage name="message" component="span" className={style.error} />
          <button type="submit"
            className={`${style.btn} ${!(dirty && isValid) ? style.btn_disabled : ""}`}
            disabled={!(dirty && isValid) && isSubmitting}
          >
              Publish
          </button>
          {error ? (
                <div className={style.server_errorContainer}>
                  <p className={style.server_error}>{`Something wrong!`}</p>
                  <p className={style.server_error}>{error}</p>
                </div>
            ) : null}
        </Form>
      )}
    </Formik>
  )
}

export default AddMessageForm;