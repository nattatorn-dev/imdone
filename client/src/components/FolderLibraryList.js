import React from 'react'

import { MenuLabel, MenuList, MenuLink } from 're-bulma'
import { LibraryCircle, Svg } from 'shared'

const LibraryItem = ({ number, display, count, children }) => {
  return (
    <li>
      <MenuLink href="#" style={{ display: 'flex' }}>
        <span>{children}</span>
        <span
          style={{
            verticalAlign: 'middle',
            flex: '1',
          }}
        >
          {display}
        </span>
        <span
          style={{
            verticalAlign: 'middle',
          }}
        >
          {count}
        </span>
      </MenuLink>
    </li>
  )
}

const FolderLibraryList = ({ lable, library }) => {
  return (
    <div>
      <MenuLabel>
        {lable}
      </MenuLabel>
      <MenuList>
        {library.map((e, k) =>
          <LibraryItem {...e} key={`${k}-${e.fileName}`}>
            <LibraryCircle fileName={e.fileName} size={'16px'} />
          </LibraryItem>
        )}
      </MenuList>
    </div>
  )
}

export default FolderLibraryList
