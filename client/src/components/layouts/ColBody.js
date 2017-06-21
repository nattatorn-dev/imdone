import React from 'react'
import { Column, Box } from 're-bulma'

const ColBody = ({ children }) => {
  return (
    <Column size="is7">
      <Box>{children}</Box>
    </Column>
  )
}

export default ColBody
