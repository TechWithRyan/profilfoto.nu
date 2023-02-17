import React from 'react';
import "../components/SocialMedia.css"

const SocialMedia = () => {

  return (
<>
    <div id="sidebar">
  <div className="social facebook">
    <a href=" https://www.facebook.com/ryanphillips.cornelio/ " target="_blank">
      <p>Facebook <i className="fa fa-facebook "></i> </p>
    </a>
  </div>
  <div className="social github">
    <a href=" https://github.com/TechWithRyan " target="_blank">
      <p>Github<i className="fa fa-github"></i> </p>
    </a>
  </div>
  
  <div className="social youtube">
    <a href=" https://www.youtube.com/channel/UCOg3PF76vT3K6DMGcU7-XzA " target="_blank">
      <p>Youtube<i className="fa fa-youtube-play"></i> </p>
    </a>
  </div>
  <div className="social linkedin">
    <a href=" https://www.linkedin.com/in/ryan-phillips-iserhills-cornelio/ " target="_blank">
      <p>LinkedIn<i className="fa fa-linkedin"></i> </p>
    </a>
  </div>
</div>

</>
  )
}

export default SocialMedia
