import React from 'react'

import './LoadingScoreboard.scss'
import '../LoadingAnimations.scss'

const LoadingScoreboard = () => {
  return(
    <div className='loading_scoreboard_container'>
      <h1>Initializing Scoreboard</h1>
      <div className="loading_scoreboard">
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