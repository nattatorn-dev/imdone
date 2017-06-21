import React from 'react'
import { Column, Box, MenuList, MenuLink } from 're-bulma'

const NoteBooksList = ({ children }) => {
  return (
    <Column size="is3">
      {children}
    </Column>
  )
}

export default NoteBooksList
