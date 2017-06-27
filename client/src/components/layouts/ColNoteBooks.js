import React from 'react'
import { Column, Box, MenuList, MenuLink } from 're-bulma'

const style = {
  padding: '0px',
  borderLeft: '1px solid rgba(211,214,219,.5)',
  borderRight: '1px solid rgba(211,214,219,.5)',
}

const ColNoteBooks = ({ children }) => {
  return (
    <Column size="is3" style={style}>
      {children}
    </Column>
  )
}

export default ColNoteBooks
