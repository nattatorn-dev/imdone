import { Component } from 'react'
import { gql, graphql } from 'react-apollo'
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

class OpenGraphPanel extends Component {
  state = { openGraph: {} }
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
    const { data: { openGraph } } = await this.props.fetchOpenGraph(url)
    this.setState({ openGraph })
  }

  renderOpenGraph = () => {
    const {
      ogTitle,
      ogDescription,
      ogUrl,
      ogImage: { url: ogImageUrl = '' },
    } = this.state.openGraph
    return (
      <Box>
        <Media>
          <MediaLeft>
            {ogImageUrl && <Image src={ogImageUrl} size="is128X128" />}
          </MediaLeft>
          <MediaLeft>
            <Button delete />
          </MediaLeft>
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
    return (
      <div>
        {this.state.openGraph && Object.keys(this.state.openGraph).length !== 0
          ? this.renderOpenGraph()
          : null}
      </div>
    )
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

export default graphql(openGraph, {
  props: ({ mutate }) => ({
    fetchOpenGraph: url =>
      mutate({
        variables: { url },
      }),
  }),
})(OpenGraphPanel)
