import React from 'react'
import ContentLoader from 'react-content-loader'
import moment from 'moment'
import { MenuLink, Media, MediaContent, Content } from 're-bulma'
import MediaImage from './MediaImage'
import NoteBooksMediaItem from './NoteBooksMediaItem'
import { LiMedia } from '../shared'
import { NoteBookPreLoader } from './preloaders'

const NoteBooksMediaLists = ({ notebooks }) => {
  return notebooks.length === 0
    ? <NoteBookPreLoader limit={10} />
    : <div>
        {notebooks.map((e, k) => <NoteBooksMediaItem key={`${k}`} {...e} />)}
      </div>
}

export default NoteBooksMediaLists
