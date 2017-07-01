import { gql } from 'react-apollo'

const SINGLE_UPLOAD = gql`
  mutation singleUpload ($file: Upload!) {
    singleUpload (file: $file) {
      name
      type
      size
      path
    }
  }
`

export default SINGLE_UPLOAD
