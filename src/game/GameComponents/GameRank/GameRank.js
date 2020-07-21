import React from 'react'
import { connect } from 'react-redux'

import './GameDesktopRank.css'
import './GameDesktopRankDismount.css'
import './GameDesktopRankOnmount.css'
import './GameMobileRankLandscape.css'
import './GameMobileRankPortrait.css'

const GameRank = (props) => {

  let currentClass

  if(props.device === "mobile") {
    if(props.orientation === "landscape") {
      currentClass = "game_mobile_rank_landscape"
    } else {
      currentClass = "game_mobile_rank_portrait"
    }
  } else {
    if(props.ui.initDismount) currentClass = "dismount_game_desktop_rank"
    else currentClass = "game_desktop_rank"
  }

  return(
    <div className={ currentClass }>
      <h1>RANK</h1>
      <h2>{ props.rank ? props.rank : "SUPER BABY FINGERS" }</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    device: state.detect.device,
    orientation: state.detect.orientation,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(GameRank)