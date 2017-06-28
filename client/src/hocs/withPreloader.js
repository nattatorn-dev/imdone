import { branch, renderComponent } from 'recompose'
import { Loader } from '../components/preloaders'

export default branch(props => {
  return props.loading
}, renderComponent(Loader))
