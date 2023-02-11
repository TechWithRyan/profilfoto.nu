import React from 'react'
import Carouseli from '../components/Carousel'
import ReactPlayer from 'react-player'
import "./Home.css";

const MediaList = () => {
  return (
    <div>
      <Carouseli />
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=6g43qj8-3gc&t=3s'
          width='70%'
          height='70vh'
        />
      </div>
    </div>
  )
}

export default MediaList




