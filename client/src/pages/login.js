import Layout from '@components/Layout'
import Login from '@components/modules/Login/LoginContainer'
import withData from 'lib/withData'

export default withData(props =>
  <Layout title="Login">
    <Login />
  </Layout>
)
