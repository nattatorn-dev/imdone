import { gql, graphql } from 'react-apollo'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { Button, Input } from 're-bulma'
import { FormField } from 'shared'

const submit = async (values, dispatch, props) => {
  try {
    const result = await props.login(values.username, values.password)
    props.loginService(result.data.login.token, result.data.login.user)
  } catch (e) {
    return Promise.reject(new SubmissionError({ _error: e.toString() }))
  }
}

function Login({ handleSubmit, resetForm, submitting, error }) {
  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Login</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <Field
        name="username"
        type="text"
        component={FormField}
        placeholder="username"
      />
      <Field
        name="password"
        type="password"
        component={FormField}
        placeholder="password"
      />
      <Button buttonStyle="isOutlined" color="isPrimary" type="submit">
        Submit
      </Button>
    </form>
  )
}

export default Login
