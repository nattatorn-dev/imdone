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

const NavLayout = ({ user, title, handleToggleNav, toggleNav }) => {
  return (
    <Nav hasShadow>
      <NavContainer isActive isTab>
        <NavGroup align="left">
          <NavItem>
            <img
              style={{ paddingRight: '2px' }}
              src="/static/logo.png"
              alt="Logo"
            />
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
