import React from 'react'
import { MediaLeft, Image } from 're-bulma'
import { ImageCircle } from '../shared'

console.log('ImageCircle', ImageCircle)
const MediaImage = ({ url, width, height, type }) => {
  return (
    <MediaLeft>
      <ImageCircle src={url} size={'64px'} radius={'50%'} />
    </MediaLeft>
  )
}

export default MediaImage
