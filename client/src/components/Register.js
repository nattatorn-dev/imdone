import { gql, graphql } from 'react-apollo'
import { reduxForm, Field, SubmissionError } from 'redux-form'
import { Button, Input } from 're-bulma'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Required'
  }
  if (!values.dispName) {
    errors.dispName = 'Required'
  }
  if (!values.password) {
    errors.password = 'Required'
  }
  return errors
}

const submit = async (values, dispatch, props) => {
  try {
    props.register(values.username, values.password, values.dispName)
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
      <h1>Register</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <Field
        name="username"
        type="text"
        component={renderField}
        placeholder="usernanme"
      />
      <Field
        name="password"
        type="password"
        component={renderField}
        placeholder="password"
      />
      <Field
        name="dispName"
        type="text"
        component={renderField}
        placeholder="display name"
      />
      <Button buttonStyle="isOutlined" color="isPrimary" type="submit">
        Submit
      </Button>
    </form>
  )
}

const register = gql`
  mutation register($username: String!, $password: String!, $dispName: String!) {
    register(username: $username, password: $password, dispName: $dispName) {
      id
      username
      dispName
    }
  }
`

export default graphql(register, {
  props: ({ mutate }) => ({
    register: (username, password, dispName) =>
      mutate({
        variables: { username, password, dispName },
      }),
  }),
})(
  reduxForm({
    form: 'registerForm',
    validate,
  })(Submit)
)
