import React from 'react'
import { logout } from '../../utils/AuthService'
import Link from 'next/link'
import { NavGroup, NavItem, Button } from 're-bulma'

const NavRight = ({ user }) => {
  return (
    <NavGroup align="right" isMenu>
      <Link prefetch href="/posts">
        <NavItem>Posts</NavItem>
      </Link>
      <Link prefetch href="/about">
        <NavItem>About</NavItem>
      </Link>
      {!user &&
        <NavItem>
          <Link href="/login">
            <Button buttonStyle="isOutlined">Log in</Button>
          </Link>
        </NavItem>}
      {!user &&
        <NavItem>
          <Link href="/register">
            <Button state="isActive" color="isInfo">Sign up</Button>
          </Link>
        </NavItem>}
      {user &&
        <NavItem>
          Hi <strong>{user.dispName}</strong>
        </NavItem>}
      {user &&
        <NavItem onClick={() => logout()}>
          <Button state="isActive" color="isInfo">Log out</Button>
        </NavItem>}
    </NavGroup>
  )
}

export default NavRight
