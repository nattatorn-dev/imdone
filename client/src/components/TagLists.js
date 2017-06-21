import React from 'react'
import { Columns, Column } from 're-bulma'

const TagLists = ({ tags }) => {
  const TagItem = () =>
    tags.map(({ name }, k) =>
      <span key={k}>
        <Column
          style={{
            backgroundColor: '#ececec',
            borderRadius: '12px',
            padding: '0 5px',
            marginRight: '4px',
          }}
        >
          {name}
        </Column>
      </span>
    )
  return (
    <Columns isMultiline>
      {TagItem()}
    </Columns>
  )
}

export default TagLists
