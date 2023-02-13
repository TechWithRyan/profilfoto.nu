import React from 'react'
import "./Film.css"
import ReactPlayer from 'react-player'
import "./Home.css";

const Film = () => {
  return (
    <>
      <h3 className="banner">Film</h3>
      <div className='video-limiter'>
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player'
            url='https://www.youtube.com/watch?v=6g43qj8-3gc&t=3s'
            width='50%'
            height='100%'
            controls='true'
          />
          <p className='text'>Video ifrån Iron Works i Göteborg</p>
        </div>
      </div>
    </>
  )
}

export default Film




