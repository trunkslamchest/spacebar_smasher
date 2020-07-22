import React from 'react'

import './LoadingHomeContainer.css'
import '../LoadingAnimations.css'

const LoadingHomeContainer = () => {
  return(
    <div className='loading_home_container'>
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

export default LoadingHomeContainer