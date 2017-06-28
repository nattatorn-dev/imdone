import { graphql } from 'react-apollo'
import { reduxForm } from 'redux-form'
import { compose, pure, withProps } from 'recompose'
import { REGISTER } from './graphql'
import { withForm } from 'hocs'
import validate from './validate'
import Login from './Login'
import { login } from 'utils/AuthService'

export default compose(
  graphql(REGISTER, {
    props: ({ mutate }) => ({
      login: (username, password) =>
        mutate({
          variables: { username, password },
        }),
    }),
  }),
  reduxForm({
    form: 'loginForm',
    validate,
  }),
  withProps({
    loginService: Login,
  }),
  withForm,
  pure
)(Login)
