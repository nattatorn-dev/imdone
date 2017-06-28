import React from 'react'
import ContentLoader, { Rect, Circle } from 'react-content-loader'

const OpenGraphPreLoader = ({ limit = 10 }) => {
  const renderPreloader = () =>
    [...Array(limit).keys()].map((e, k) =>
      <ContentLoader height={60} speed={1}>
        <Circle x={35} y={30} radius={25} />
        <Rect x="80" y="7" rx="4" ry="4" width="250" height="7" />
        <Rect x="80" y="23" rx="3" ry="3" width="300" height="7" />
        <Rect x="80" y="33" rx="3" ry="3" width="300" height="7" />

      </ContentLoader>
    )

  return <div>{renderPreloader()}</div>
}

export default OpenGraphPreLoader
