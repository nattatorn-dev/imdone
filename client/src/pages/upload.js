import Upload from 'components/Upload'
import Layout from 'components/Layout'
import withData from 'lib/withData'

export default withData(props =>
  <Layout title="Upload demo">
    <h1>Apollo upload examples</h1>
    <p>Select an file to upload and view the response in the console.</p>
    <Upload />
  </Layout>
)
