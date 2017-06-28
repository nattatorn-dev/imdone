import { Title, Subtitle } from 're-bulma'
import withData from 'lib/withData'
import { authenticate } from 'utils/AuthService'
import Layout from 'components/Layout'

const Page = props =>
  <Layout user={props.user} title="Home">
    <Title>Section</Title>
    <Subtitle>
      A simple container to divide your page into <strong>sections</strong>,
      like the one you're currently reading
    </Subtitle>
  </Layout>

Page.getInitialProps = async ({ req, res }) => {
  const user = await authenticate(req, res)
  return { user }
}

export default withData(Page)
