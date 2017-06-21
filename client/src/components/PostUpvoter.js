import React from 'react'
import { gql, graphql } from 'react-apollo'
import { Button } from 're-bulma'

function PostUpvoter({ upvote, votes, id }) {
  return (
    <Button
      buttonStyle="isOutlined"
      color="isInfo"
      onClick={() => upvote(id, votes + 1)}
    >
      {votes.toString()}
    </Button>
  )
}

const upvotePost = gql`
  mutation updatePost($id: String!, $votes: Int) {
    updatePost(id: $id, votes: $votes) {
      id
      votes
    }
  }
`

export default graphql(upvotePost, {
  props: ({ ownProps, mutate }) => ({
    upvote: (id, votes) =>
      mutate({
        variables: { id, votes },
        optimisticResponse: {
          updatePost: {
            id: ownProps.id,
            votes: ownProps.votes + 1,
          },
        },
      }),
  }),
})(PostUpvoter)
