import React from 'react'
import { Column, Box } from 're-bulma'

const ColBody = ({ children }) => {
  return (
    <Column size="is7">
      {children}
    </Column>
  )
}

export default ColBody
