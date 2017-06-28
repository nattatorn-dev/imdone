import Layout from '../components/Layout'
import Register from '../components/Register/RegisterContainer'
import withData from '../lib/withData'

export default withData(props =>
  <Layout title="Register">
    <Register />
  </Layout>
)
