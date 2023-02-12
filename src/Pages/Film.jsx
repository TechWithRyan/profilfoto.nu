import React from 'react'
import "./Film.css"
import ReactPlayer from 'react-player'
import "./Home.css";

const Film = () => {
  return (
    <div>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=6g43qj8-3gc&t=3s'
          
          controls='true'
        />
      </div>
    </div>
  )
}

export default Film




