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

import { Nav, Footer, ColBody, ColNoteBooks } from './layouts'
import NoteBooksMediaLists from './NoteBooksMediaLists'
import FolderLibraryList from './FolderLibraryList'
import faker from 'faker'

const generateNoteBooks = (limit = 10) => {
  let notebooks = []

  for (let i = 0; i < limit; ++i) {
    notebooks.push({
      _id: `${i + 1}`,
      title: faker.lorem.sentence(),
      excerpt: faker.lorem.lines(),
      description: faker.lorem.paragraphs(),
      url: faker.internet.url(),
      image: {
        url: i % 2 === 0 ? faker.image.avatar() : null,
      },
      tags: [
        {
          name: faker.lorem.slug(),
        },
        {
          name: faker.lorem.slug(),
        },
        {
          name: faker.lorem.slug(),
        },
        {
          name: faker.lorem.slug(),
        },
      ],
      isFavorite: true,
      createdAt: faker.date.past(),
      updatedAt: faker.date.past(),
    })
  }

  return notebooks
}

const library = [
  { count: 3, fileName: 'inbox', display: 'Inbox' },
  { count: 15, fileName: 'favorite', display: 'favorites' },
  { count: 18, fileName: 'recent', display: 'Recents' },
  { count: 5, fileName: 'trash', display: 'Trash' },
  { count: 102, fileName: 'notebooks', display: 'All Notes' },
]

const notebooks = [
  { count: 68, fileName: 'notebook', display: 'React' },
  { count: 30, fileName: 'notebook', display: 'Angular' },
  { count: 22, fileName: 'notebook', display: 'Vue' },
  { count: 10, fileName: 'notebook', display: 'Devops' },
]

class Layout extends React.Component {
  state = {
    toggleNav: false,
    notebooks: [],
  }

  handleToggleNav = () => {
    this.setState(prevState => {
      return { toggleNav: !prevState.toggleNav }
    })
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.setState({ notebooks: generateNoteBooks(8) })
  }

  render() {
    const { user, title } = this.props
    const { toggleNav } = this.state
    const style = { padding: '0px' }
    return (
      <div className="app">
        <Head>
          <title>{title}</title>
        </Head>
        <Nav
          user={user}
          title={title}
          handleToggleNav={this.handleToggleNav}
          toggleNav={toggleNav}
        />
        <Section>
          <Columns size="is2">
            <Column style={style}>
              <Button color="isDark">Notebooks</Button>
              <Button>Tags</Button>
              <Button>Categories</Button>

              <Menu style={{ paddingTop: '30px' }}>
                <FolderLibraryList lable={'LIBRARY'} library={library} />
                <FolderLibraryList lable={'NOTEBOOKS'} library={notebooks} />
                <div>
                  <MenuLabel>
                    CONNECTS
                  </MenuLabel>
                </div>
              </Menu>
            </Column>
            <ColNoteBooks>
              <Menu>
                <MenuList>
                  <NoteBooksMediaLists notebooks={this.state.notebooks} />
                </MenuList>
              </Menu>
            </ColNoteBooks>
            <ColBody>
              {this.props.children}
            </ColBody>
          </Columns>
        </Section>
        <Footer />
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
