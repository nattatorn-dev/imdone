import { Component } from 'react'
import { gql, graphql, compose } from 'react-apollo'
import {
  Box,
  Media,
  MediaLeft,
  MediaContent,
  Content,
  MediaRight,
  Button,
  Image,
} from 're-bulma'

import { withMutatable } from '../hocs'
import { OpenGraphPreLoader } from '../components/preloaders'

import { ImageCircle } from '../shared'

class OpenGraphPanel extends Component {
  state = {
    enableFetchOg: true,
  }
  // onClick = async () => {
  //   const { data: { openGraph } } = await this.props.fetchOpenGraph(
  //     this.props.url,
  //   )
  //   this.setState({ openGraph })
  // }
  componentWillReceiveProps(nextProps) {
    if (nextProps.url !== this.props.url) {
      this.fetchOpenGraph(nextProps.url)
    }
  }

  componentDidMount() {
    this.fetchOpenGraph()
  }

  fetchOpenGraph = async (url = this.props.url) => {
    // const { data: { openGraph } } = await this.props.fetchOpenGraph(url)
    if (this.state.enableFetchOg) {
      this.props.submit(null, { url })
      this.setState((prevState, props) => {
        return { enableFetchOg: !prevState.enableFetchOg }
      })
    } else null
    // this.setState({ openGraph })
  }

  isUrl = () => {
    const expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi
    const regex = new RegExp(expression)
    if (this.props.url.match(regex)) {
      return true
    } else {
      return false
    }
  }
  renderOpenGraph = () => {
    const {
      ogTitle,
      ogDescription,
      ogUrl,
      ogImage: { url: ogImageUrl = '' },
    } = this.props.data.openGraph

    return (
      <Box>
        <Media>
          {ogImageUrl &&
            <MediaLeft>
              <ImageCircle src={ogImageUrl} size={'128px'} radius={'50%'} />
            </MediaLeft>}
          <MediaContent>
            <Content>
              <p>
                <strong style={{ color: 'black' }}>{ogTitle}</strong>
                <br />
                {ogDescription}
              </p>
              <p>
                <strong>{ogUrl}</strong>
              </p>
            </Content>
          </MediaContent>
          <MediaRight>
            <Button delete />
          </MediaRight>
        </Media>
      </Box>
    )
  }

  render() {
    if (this.props.loading && this.isUrl()) {
      return (
        <Box style={{ padding: '0 20px' }}>
          <OpenGraphPreLoader limit={1} />
        </Box>
      )
    } else if (this.props.data && this.props.data.openGraph) {
      return this.renderOpenGraph()
    } else {
      return null
    }
  }
}

const openGraph = gql`
  mutation openGraph($url: String!) {
    openGraph(url: $url) {
      ogLocale
      ogUrl
      ogType
      ogTitle
      ogDescription
      ogImage {
        url
        width
        height
        type
      }
    }
  }
`

export default compose(graphql(openGraph), withMutatable())(OpenGraphPanel)
