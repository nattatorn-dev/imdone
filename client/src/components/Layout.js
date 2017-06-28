import React, { Component } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { logout } from 'utils/AuthService'

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
  Addons,
  Input,
} from 're-bulma'

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
    this.setState({ notebooks: generateNoteBooks(8) })
  }

  render() {
    const { user, title } = this.props
    const { toggleNav } = this.state

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
        <Section style={{ padding: '10px' }}>
          <Columns>
            <Column>
              <Button color="isDark">Notebooks</Button>
              <Button>Tags</Button>
              <Button>Categories</Button>
              <Menu style={{ paddingTop: '30px' }}>
                <FolderLibraryList lable={'LIBRARY'} library={library} />
                <FolderLibraryList lable={'NOTEBOOKS'} library={notebooks} />
              </Menu>
            </Column>
            <ColNoteBooks>
              <Menu>
                <MenuList>
                  <Input placeholder="Filter by keywprd, title or #tag" />
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
      </div>
    )
  }
}

export default Layout
