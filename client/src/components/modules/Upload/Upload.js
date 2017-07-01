import { gql } from 'react-apollo'
import { Field, SubmissionError } from 'redux-form'
import { Button, Input } from 're-bulma'
import { FormField } from 'shared'

const submit = (onRequest, onSuccess, onError) => {
  return async (values, dispatch, props) => {
    try {
      onRequest()
      props
        .register(values.username, values.password, values.dispName)
        .then(({ data }) => {
          onSuccess(data)
        })
        .catch(err => {
          onError(err)
        })
    } catch (e) {
      return Promise.reject(new SubmissionError({ _error: e.toString() }))
    }
  }
}

function Register({
  handleSubmit,
  resetForm,
  submitting,
  error,
  onRequest,
  onSuccess,
  onError,
  formError,
  loading,
}) {
  return (
    <form onSubmit={handleSubmit(submit(onRequest, onSuccess, onError))}>
      <h1>Register</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <Field
        name="username"
        type="text"
        component={FormField}
        placeholder="usernanme"
      />
      <Field
        name="password"
        type="password"
        component={FormField}
        placeholder="password"
      />
      <Field
        name="dispName"
        type="text"
        component={FormField}
        placeholder="display name"
      />
      <pre>{formError}</pre>
      {!loading &&
        <Button buttonStyle="isOutlined" color="isPrimary" type="submit">
          Submit
        </Button>}
      {loading && <Button state="isLoading">Loading</Button>}
    </form>
  )
}

export default Register
