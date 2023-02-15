import React from 'react';
import "../components/SocialMedia.css"
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SocialMedia = () => {

  return (
<>
    <div id="sidebar">
  <div class="social facebook">
    <a href=" https://www.facebook.com/ryanphillips.cornelio/ " target="_blank">
      <p>Like on Facebook <i class="fa fa-facebook "></i> </p>
    </a>
  </div>
  <div class="social github">
    <a href=" https://github.com/TechWithRyan " target="_blank">
      <p>Follow on Github<i class="fa fa-github"></i> </p>
    </a>
  </div>
  
  <div class="social youtube">
    <a href=" https://www.youtube.com/channel/UCOg3PF76vT3K6DMGcU7-XzA " target="_blank">
      <p>Subscribe on Youtube<i class="fa fa-youtube-play"></i> </p>
    </a>
  </div>
  <div class="social linkedin">
    <a href=" https://www.linkedin.com/in/ryan-phillips-iserhills-cornelio/ " target="_blank">
      <p>Connect on LinkedIn<i class="fa fa-linkedin"></i> </p>
    </a>
  </div>
</div>

</>
  )
}

export default SocialMedia
