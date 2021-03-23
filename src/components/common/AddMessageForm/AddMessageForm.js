import { Field, Form, Formik } from 'formik';

function AddMessageForm(props) {
  const submit = (values, { setSubmitting }) => {
    props.onSubmit(values);
  }
  
  return (
    <Formik
      initialValues={{ message: "" }}
      onSubmit={submit}
    >
      {({ isSubmitting }) => (
        <Form className={props.style}>
          <Field type="text" name="message" placeholder='Enter your message'/>
          <button type="submit" disabled={isSubmitting}>Send</button>
        </Form>
      )}
    </Formik>
  )
}

export default AddMessageForm;