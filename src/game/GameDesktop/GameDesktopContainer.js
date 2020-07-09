import React from 'react'

import GameDesktopTimer from './GameComponents/GameDesktopTimer'
import GameDesktopCounter from './GameComponents/GameDesktopCounter'
import GameDesktopRank from './GameComponents/GameDesktopRank'
import GameDesktopPower from './GameComponents/GameDesktopPower'

import './GameDesktopContainer.css'
import './GameDesktopDismount.css'

export default class GameDesktopContainer extends React.Component {

  render(){
    return(
      <>
        <GameDesktopTimer
          time={ this.props.time }
          showTimer={ this.props.showTimer }
          initDismount={ this.props.initDismount }
        />
        <GameDesktopCounter
          count={ this.props.count }
          showCounter={ this.props.showCounter }
          initDismount={ this.props.initDismount }
        />
        <GameDesktopRank
          rank={ this.props.rank }
          showRank={ this.props.showRank }
          initDismount={ this.props.initDismount }
        />
        <GameDesktopPower
          power={ this.props.power }
          powerRaw={ this.props.powerRaw }
          showPower={ this.props.showPower }
          initDismount={ this.props.initDismount }
        />
      </>
    )
  }
}