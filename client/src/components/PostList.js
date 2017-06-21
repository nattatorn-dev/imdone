import React from 'react'
import { gql, graphql } from 'react-apollo'
import PostUpvoter from './PostUpvoter'
import { Panel, PanelBlock, Button } from 're-bulma'

const POSTS_PER_PAGE = 10

class PostList extends React.Component {
  componentDidMount() {
    this.props.subscribe()
  }

  render() {
    const {
      data: { allPosts, loading, _allPostsMeta },
      loadMorePosts,
    } = this.props
    if (allPosts && allPosts.length) {
      const areMorePosts = allPosts.length < _allPostsMeta.count
      return (
        <div>
          <Panel>
            {allPosts.map((post, index) =>
              <PanelBlock key={post.id}>
                <div>
                  <span>{index + 1}. </span>
                  <a href={post.url}>{post.title}</a>{'  '}
                  <PostUpvoter id={post.id} votes={post.votes} />
                </div>
              </PanelBlock>
            )}
          </Panel>
          {areMorePosts
            ? loading
              ? <Button state="isLoading" color="isPrimary">Loading</Button>
              : <Button
                  buttonStyle="isOutlined"
                  color="isPrimary"
                  onClick={() => loadMorePosts()}
                >
                  Show More
                </Button>
            : ''}
        </div>
      )
    }
    return <div>Loading</div>
  }
}

const allPosts = gql`
  query allPosts($first: Int!, $skip: Int!) {
    allPosts(orderBy: createdAt_DESC, first: $first, skip: $skip) {
      id
      title
      votes
      url
      createdAt
    },
    _allPostsMeta {
      count
    }
  }
`

const postSubscription = gql`
  subscription postAdded {
    postAdded {
      id
      title
      votes
      url
      createdAt
    }
  }
`

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (PostList)
export default graphql(allPosts, {
  options: {
    variables: {
      skip: 0,
      first: POSTS_PER_PAGE,
    },
  },
  props: ({ data }) => ({
    data,
    loadMorePosts: () => {
      return data.fetchMore({
        variables: {
          skip: data.allPosts.length,
        },
        updateQuery: (previousResult, { fetchMoreResult }) => {
          if (!fetchMoreResult) {
            return previousResult
          }
          return Object.assign({}, previousResult, {
            // Append the new posts results to the old one
            allPosts: [...previousResult.allPosts, ...fetchMoreResult.allPosts],
          })
        },
      })
    },
    subscribe: () =>
      data.subscribeToMore({
        document: postSubscription,
        updateQuery: (prev, { subscriptionData: { data } }) => ({
          ...prev,
          allPosts: [...prev.allPosts, data.postAdded],
        }),
        onError(error) {
          console.log(error)
        },
      }),
  }),
})(PostList)
