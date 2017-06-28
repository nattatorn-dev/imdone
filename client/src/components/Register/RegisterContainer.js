import { graphql } from 'react-apollo'
import { reduxForm } from 'redux-form'
import { compose, pure } from 'recompose'
import { ADD_REGISTER } from './graphql'
import { withMutatable, withPreloader } from '../../hocs'

import validate from './validate'
import Register from './Register'
import { NoteBookPreLoader } from '../../components/preloaders'

export default compose(
  graphql(ADD_REGISTER, {
    props: ({ mutate }) => ({
      register: (username, password, dispName) =>
        mutate({
          variables: { username, password, dispName },
        }),
    }),
  }),
  reduxForm({
    form: 'registerForm',
    validate,
  }),
  withPreloader,
  pure
)(Register)
