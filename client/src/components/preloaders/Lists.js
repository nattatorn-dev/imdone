import React from 'react'
import ContentLoader from 'react-content-loader'

const Lists = ({ limit = 10 }) => {
  const renderPreloader = () =>
    [...Array(limit).keys()].map((e, k) =>
      <ContentLoader key={k} type="facebook" />
    )

  return <div>{renderPreloader()}</div>
}

export default Lists
