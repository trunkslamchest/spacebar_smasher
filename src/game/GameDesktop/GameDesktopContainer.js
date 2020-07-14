import React from 'react'

import GameDesktopTimer from './GameComponents/GameDesktopTimer'
import GameDesktopCounter from './GameComponents/GameDesktopCounter'
import GameDesktopRank from './GameComponents/GameDesktopRank'
import GameDesktopPower from './GameComponents/GameDesktopPower'

import './GameDesktopContainer.css'
import './GameDesktopDismount.css'

const GameDesktopContainer = (props) => {
  return(
    <>
      <GameDesktopTimer
        time={ props.time }
        showTimer={ props.showTimer }
        initDismount={ props.initDismount }
      />
      <GameDesktopCounter
        count={ props.count }
        showCounter={ props.showCounter }
        initDismount={ props.initDismount }
      />
      <GameDesktopRank
        rank={ props.rank }
        showRank={ props.showRank }
        initDismount={ props.initDismount }
      />
      <GameDesktopPower
        power={ props.power }
        powerRaw={ props.powerRaw }
        showPower={ props.showPower }
        initDismount={ props.initDismount }
      />
    </>
  )
}

export default GameDesktopContainer