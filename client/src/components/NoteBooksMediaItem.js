import React from 'react'
import moment from 'moment'

import {
  Columns,
  Column,
  MenuLink,
  Media,
  MediaContent,
  MediaRight,
  Content,
} from 're-bulma'
import MediaImage from './MediaImage'
import TagLists from './TagLists'
import { LiMedia, Svg } from '../shared'

const NoteBooksMediaItem = ({
  title,
  excerpt,
  description,
  url,
  image,
  createdAt,
  updatedAt,
  tags,
  isFavorite,
  image: { url: urlImage },
}) => {
  const svgStyle = { height: '16px', width: '16px' }
  const renderMediaImage = () => urlImage && <MediaImage {...image} />
  const renderFoverite = () => isFavorite && <Svg.Favorite style={svgStyle} />
  const renderLink = () => url && <Svg.Link style={svgStyle} />

  return (
    <LiMedia>
      <MenuLink href="#" style={{ padding: '10px 15px 18px 15px' }}>
        <Media>
          {renderMediaImage()}
          <MediaContent>
            <Content>
              <p>
                <strong style={{ fontWeight: 'bold' }}>{title}</strong>{' '}
                <br />
                {excerpt}
              </p>
            </Content>
          </MediaContent>
        </Media>
        <Content>
          <div style={{ fontSize: '12px' }}>
            <small>{moment(updatedAt).format('MMM D, YYYY')}</small>{' '}
            <Svg.Tag style={{ height: '16px', width: '16px' }} />{' '}
            {/* {renderLink()} */}
            {renderFoverite()}
            <TagLists tags={tags} />
          </div>
        </Content>
      </MenuLink>
    </LiMedia>
  )
}

export default NoteBooksMediaItem
