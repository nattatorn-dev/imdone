import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { logout } from '../../utils/AuthService'

import {
  Nav,
  Navbar,
  NavContainer,
  NavGroup,
  NavItem,
  NavToggle,
  Button,
} from 're-bulma'
import NavRight from './NavRight'
import { Svg } from '../../shared'

const NavLayout = ({ user, title, handleToggleNav, toggleNav }) => {
  const svgStyle = { height: '20px', width: '20px', paddingRight: '2px' }

  return (
    <Nav hasShadow>
      <NavContainer isActive isTab>
        <NavGroup align="left">
          <NavItem>
            <Svg.Logo style={svgStyle} />
            <strong>{'pollo'}</strong>
          </NavItem>
        </NavGroup>
        <NavGroup align="center">
          <NavItem>
            Note
          </NavItem>
          <NavItem>
            Folder
          </NavItem>
        </NavGroup>
        <NavToggle isActive={toggleNav} onClick={handleToggleNav} />
        <NavRight user={user} handleToggleNav={handleToggleNav} />
      </NavContainer>
    </Nav>
  )
}

export default NavLayout
