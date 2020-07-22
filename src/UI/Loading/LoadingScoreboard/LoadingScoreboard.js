import React from 'react'

import './LoadingScoreboard.css'

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