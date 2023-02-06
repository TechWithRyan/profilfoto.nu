import React from 'react'
import { Link } from 'react-router-dom'

const MediaList = () => {
  return (
    <>
    <h1>Media List</h1>
      <Link to="/Media/1">Photo 1</Link>
      <br />
      <Link to="/Media/2">Photo 2</Link>
      <br />
      <Link to="/Media/new">New Image</Link>
    </>
  )
}

export default MediaList
