import React from 'react'
import { PhotoAlbum } from 'react-photo-album';
import alex from "../Img/alex.JPG"
import gang from "../Img/gang.JPG"
import flex from "../Img/flex.JPG"
import photo from "../Img/photo.JPG"
import photo2 from "../Img/photo2.JPG"
import bg6 from "../Img/bg6.jpg"
import side2 from "../Img/side2.JPG"
import "./Galleri.css"

const photos = [
  {
    src: [alex],
    width: 800,
    height: 600
  },
  {
    src: [gang],
    width: 800,
    height: 600
  },
  {
    src: [flex],
    width: 800,
    height: 600
  },
  {
    src: [photo],
    width: 800,
    height: 600
  },
  {
    src: [photo2],
    width: 800,
    height: 600
  },
  {
    src: [bg6],
    width: 800,
    height: 600
  },
  {
    src: [side2],
    width: 400,
    height: 600,
  }
];



const Galleri = () => {
  return (
    <PhotoAlbum layout="columns" photos={photos} className="images"/>
  )
}

export default Galleri





