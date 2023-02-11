import React from 'react'
import ReactPlayer from 'react-player'
import "./Home.css";


const Home = () => {
  return (
    <div className='video'>
      <ReactPlayer url='https://www.youtube.com/watch?v=6g43qj8-3gc&t=3s' />
    </div>
  )
}

export default Home


  