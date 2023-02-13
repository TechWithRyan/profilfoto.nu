import "./Ryan.css";
import ry3 from "../Img/ry3.png"
import ry2 from "../Img/ry2.png"
import ry1 from "../Img/ry1.png"
import React, { Component } from 'react'
import Typical from 'react-typical'

const Ryan = () => {
  return (
    <>

      <h3 className="banner">Webbutveckling</h3>
      <div className="about-container">

        <div className="photo-box">
          <img src={ry2} alt="" />
          <div className="text">
            <h1 className="name">Ryan-Phillips Iserhills Cornelio</h1>
            <span>Hej! Som ni ser så gillar jag att träna! Men även att 
              fotografera och spela in videos. Till en början var tanken att fota på semester men sen kom det en pandemi. Och det är kul att fota annat med. 
              <br />
              <br />
              Jag söker jobb inom webbutveckling och har gjort denna sidan i React.JS.
            </span>

          </div>
        </div>
      </div>
      
    </>
  )
}

export default Ryan
