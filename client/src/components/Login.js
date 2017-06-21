import { gql, graphql } from 'react-apollo'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { login } from '../utils/AuthService'

import { Button, Input } from 're-bulma'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

const submit = async (values, dispatch, props) => {
  try {
    const result = await props.login(values.username, values.password)
    login(result.data.login.token, result.data.login.user)
  } catch (e) {
    return Promise.reject(new SubmissionError({ _error: e.toString() }))
  }
}

const renderField = ({
  input,
  input: { name },
  label,
  type,
  placeholder,
  meta: { touched, error, warning },
}) => {
  const config = touched && error
    ? {
        color: 'isDanger',
        text: `This ${name} is invalid`,
        image: 'fa fa-warning',
      }
    : {
        image: 'fa fa-check',
      }

  return (
    <Input
      color={config.color}
      type={type}
      placeholder={placeholder}
      icon={config.image}
      hasIconRight
      help={{ color: config.color, text: config.text }}
      {...input}
    />
  )
}

function Submit({ handleSubmit, resetForm, submitting, error }) {
  return (
    <form onSubmit={handleSubmit(submit)}>
      <h1>Login</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <Field
        name="username"
        type="text"
        component={renderField}
        placeholder="username"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        placeholder="password"
      />
      <Button buttonStyle="isOutlined" color="isPrimary" type="submit">
        Submit
      </Button>
    </form>
  )
}

const loginGQL = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        id
        username
        dispName
      }
    }
  }
`

export default graphql(loginGQL, {
  props: ({ mutate }) => ({
    login: (username, password) =>
      mutate({
        variables: { username, password },
      }),
  }),
})(
  reduxForm({
    form: 'loginForm',
    validate,
  })(Submit)
)
