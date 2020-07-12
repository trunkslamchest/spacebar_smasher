import React from 'react'

import './LoadingScoreboard.css'
import './LoadingAnimations.css'

const LoadingScoreboard = () => {
  return(
    <div className='loading_scoreboard_container'>
      <div className="loadingTriplePulsBars">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

export default LoadingScoreboard