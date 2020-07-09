import React from 'react'

import './LoadingScoreboard.css'
import './LoadingAnimations.css'

const LoadingScoreboard = () => {
  return(
    //   <div className='loading_scoreboard_animation_container'>
    //     <div className='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    //   </div>
    <div className='loading_scoreboard_container'>
    <div class="loadingTriplePulsBars">
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