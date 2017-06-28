import { gql } from 'react-apollo'
import { Field, SubmissionError } from 'redux-form'
import { Button, Input } from 're-bulma'

const submit = async (values, dispatch, props) => {
  try {
    props
      .register(values.username, values.password, values.dispName)
      .then(({ data }) => {
        console.log('data', data)
      })
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

function Register({ handleSubmit, resetForm, submitting, error }) {
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

export default Register
