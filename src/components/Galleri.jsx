import React from 'react'
import { PhotoAlbum } from 'react-photo-album';

import "./Galleri.css"

const photos = [
  {
      src: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
      width: 800,
      height: 600
  },
  {
      src: "https://images.unsplash.com/photo-1502982720700-bfff97f2ecac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
      width: 800,
      height: 600
  },
  {
      src: "https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
      width: 800,
      height: 600
  },
  {
      src: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGhvdG9ncmFwaHl8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60",
      width: 1600,
      height: 900
  }
];



const Galleri = () => {
  return (
    <PhotoAlbum layout="rows" photos={photos} />
  )
}

export default Galleri





