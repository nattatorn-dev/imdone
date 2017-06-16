import React, { Component, PropTypes } from 'react'
import { logout } from '../utils/AuthService'
import Link from 'next/link'
import Head from 'next/head'
import {
  Section,
  Container,
  Columns,
  Column,
  Box,
  Footer,
  Nav,
  NavContainer,
  NavGroup,
  NavItem,
  NavToggle,
  Navbar,
  Content,
  Button,
  Icon,
  Notification,
  Menu,
  MenuLabel,
  MenuList,
  MenuLink,
  Media,
  MediaLeft,
  MediaContent,
  MediaRight,
  Image,
  Tag,
} from 're-bulma'

import InboxIcon from '../../assets/images/inbox.svg'
import FavoriteIcon from '../../assets/images/favorite.svg'
import RecentIcon from '../../assets/images/recent.svg'
import TrashIcon from '../../assets/images/trash.svg'
import NotebookIcon from '../../assets/images/notebook.svg'
import NotebooksIcon from '../../assets/images/notebooks.svg'
import TagIcon from '../../assets/images/tag.svg'

class Layout extends React.Component {
  state = {
    toggleNav: false,
  }

  handleToggleNav = () => {
    this.setState(prevState => {
      return { toggleNav: !prevState.toggleNav }
    })
  }

  renderMedia = () => {
    return (
      <div>
        <Media>
          <MediaContent>
            <Content>
              <p>
                <strong style={{ fontWeight: 'bold' }}>John Smith</strong>{' '}
                <strong>@johnsmith</strong>{' '}
                <strong>31m</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Content>
          </MediaContent>
        </Media>
        <Content>
          <p style={{ fontSize: '12px' }}>
            <small>May 22, 2017</small>{' '}
            <TagIcon style={{ height: '16px', width: '16px' }} />
            <small>
              es6, javascript
            </small>
          </p>
        </Content>
      </div>
    )
  }

  renderMediaWithImage = () => {
    return (
      <div>
        <Media>
          <MediaLeft>
            <Image
              src="https://cdn.zeit.co/zeit/twitter-card.png"
              size="is64X64"
              ratio="isSquare"
            />
          </MediaLeft>
          <MediaContent>
            <Content>
              <p>
                <strong style={{ fontWeight: 'bold' }}>John Smith</strong>{' '}
                <strong>@johnsmith</strong>{' '}
                <strong>31m</strong>
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </Content>
          </MediaContent>
        </Media>
        <Content>
          <p style={{ fontSize: '12px' }}>
            <small>May 22, 2017</small>{' '}
          </p>
        </Content>
      </div>
    )
  }

  render() {
    const { user, title } = this.props
    const style = { padding: '0px' }
    const stlyeLi = {
      borderBottom: '1px solid rgba(211,214,219,.5)',
    }
    return (
      <div className="app">
        <Head>
          <title>{title}</title>
        </Head>
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
            <NavToggle
              isActive={this.state.toggleNav}
              onClick={this.handleToggleNav}
            />
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
          </NavContainer>
        </Nav>
        <Section>
          <Columns size="is2">
            <Column style={style}>
              <Button color="isDark">Notebooks</Button>
              <Button>Tags</Button>
              <Button>Categories</Button>

              <Menu style={{ paddingTop: '30px' }}>
                <MenuLabel>
                  LIBRARY
                </MenuLabel>
                <MenuList>
                  <li>
                    <MenuLink href="#">
                      <InboxIcon style={{ height: '16px', width: '16px' }} />{' '}
                      Inbox
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink href="#">
                      <FavoriteIcon
                        style={{ height: '16px', width: '16px' }}
                      />{' '}
                      Favorites
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink href="#">
                      <RecentIcon style={{ height: '16px', width: '16px' }} />{' '}
                      Recents
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink href="#">
                      <TrashIcon style={{ height: '16px', width: '16px' }} />{' '}
                      Trash
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink href="#">
                      <NotebooksIcon
                        style={{ height: '16px', width: '16px' }}
                      />{' '}
                      All Notes
                    </MenuLink>
                  </li>
                </MenuList>
                <MenuLabel>
                  NOTEBOOKS
                </MenuLabel>
                <MenuList>
                  <li>
                    <MenuLink href="#">
                      <NotebookIcon
                        style={{ height: '16px', width: '16px' }}
                      />{' '}React
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink isActive href="#">
                      <NotebookIcon
                        style={{ height: '16px', width: '16px' }}
                      />{' '}Angular
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink href="#">
                      <NotebookIcon
                        style={{ height: '16px', width: '16px' }}
                      />{' '}Vue
                    </MenuLink>
                  </li>
                  <li>
                    <MenuLink href="#">
                      <NotebookIcon
                        style={{ height: '16px', width: '16px' }}
                      />{' '}Devops
                    </MenuLink>
                  </li>
                </MenuList>

              </Menu>
            </Column>
            <Column size="is3" style={style}>
              <Menu>
                <MenuList>
                  <li style={stlyeLi}>
                    <MenuLink href="#">{this.renderMedia()}</MenuLink>
                  </li>
                  <li style={stlyeLi}>
                    <MenuLink href="#">{this.renderMediaWithImage()}</MenuLink>
                  </li>
                  <li style={stlyeLi}>
                    <MenuLink href="#">{this.renderMedia()}</MenuLink>
                  </li>

                </MenuList>
              </Menu>
            </Column>
            <Column size="is7" style={style}>
              <Box>{this.props.children}</Box>
            </Column>
          </Columns>
        </Section>
        <Footer>
          <Container>
            <Content>
              <p style={{ textAlign: 'center' }}>
                <strong>reBulma</strong> by{' '}
                <a href="https://github.com/bokuweb">bokuweb</a>. The source
                code is licensed
                <a href="http://opensource.org/licenses/mit-license.php">
                  MIT
                </a>.
              </p>
              <p style={{ textAlign: 'center' }}>
                <a className="icon" href="https://github.com/bokuweb/re-bulma">
                  <i className="fa fa-github" />
                </a>
              </p>
            </Content>
          </Container>
        </Footer>
        <style jsx>{`
          .app .brand {
            text-decoration: none;
            top: 5px;
            left: 5px;
            border: 0;
            background-color: transparent
            background: url('/static/logo.png') no-repeat center center;
            width: 40px;
            height: 40px;
            background-size: 80%;
            margin: 5px 10px 0 0;
            border-radius: 20px;
          }
          .app .brand a {
            display: block;
            height: 40px;
            text-indent: -9999px;
          }
          .app nav :global(.fa) {
            font-size: 2em;
            line-height: 20px;
          }
          .appContent {
            margin: 50px 0; // for fixed navbar
          }
        `}</style>
      </div>
    )
  }
}

export default Layout
