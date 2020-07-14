import React from 'react'

import './HomeHeader.css'
import './HomeHeaderDismount.css'
import './HomeHeaderOnmount.css'

const HomeHeader = (props) => {
  return(
    <div className="home_header_wrapper">
      <div className={props.initDismount ? "dismount_home_header" : "home_header" } >
        <h3>SPACEBAR SMASHER</h3>
      </div>
      <div className="start_button_container">
        <button
          name="start_button"
          className={props.initDismount ? "dismount_start_button" : "start_button"}
          onClick={ props.onClickStartButton }
        >
          START
        </button>
      </div>
    </div>
  )
}

export default HomeHeader