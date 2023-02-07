import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Media = () => {
  /* UseParams hook has no parameters */
  const { id } = useParams()
  return (
    <div className="media-list">

      <h1>Media { id }</h1>
    </div>
  )
}

export default Media
