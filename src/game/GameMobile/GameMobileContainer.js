import React from 'react'

import detectOrientation from '../../utility/detectOrientation'

import GameMobileTimer from './GameComponents/GameMobileTimer'
import GameMobileCounter from './GameComponents/GameMobileCounter'
import GameMobileRank from './GameComponents/GameMobileRank'
import GameMobilePower from './GameComponents/GameMobilePower'
import GameMobileSmashButton from './GameComponents/GameMobileSmashButton'

import './GameMobileContainer.css'
import './GameMobileDismount.css'

export default class GameMobile extends React.Component {

  state={
    smashed: false,
    isLandscape: detectOrientation
  }

  constructor(props){
    super(props)
    this.detectOrientation = this.detectOrientation.bind(this);
  }

  componentDidMount(){ window.addEventListener("orientationchange", this.detectOrientation) }

  onSmash = (event) => {
    this.props.onSmash()
    this.setState({ smashed: true })
    this.timerTimeout = setTimeout(() => { this.setState({ smashed: false })}, 25)
  }

  detectOrientation(event){
    if(!window.orientation) this.setState({isLandscape: false})
    else this.setState({isLandscape: true})
  }

  render(){
    return(
      <div className={this.state.isLandscape && window.innerWidth < 1024 ? 'game_mobile_landscape': 'game_mobile_portrait'}>
        <div className={this.state.isLandscape && window.innerWidth < 1024 ? 'game_mobile_landscapeC1': null}>
          <GameMobileTimer
            time={this.props.time}
            showTimer={this.props.showTimer}
            isLandscape={this.state.isLandscape}
            initDismount={this.props.initDismount}
          />
          <GameMobileCounter
            count={this.props.count}
            showCounter={this.props.showCounter}
            isLandscape={this.state.isLandscape}
            initDismount={this.props.initDismount}
          />
        </div>
        <div className={this.state.isLandscape && window.innerWidth < 1024 ? 'game_mobile_landscapeC2': null}>
          <GameMobileRank
            rank={this.props.rank}
            showRank={this.props.showRank}
            isLandscape={this.state.isLandscape}
            initDismount={this.props.initDismount}
          />
          <GameMobilePower
            power={this.props.power}
            showPower={this.props.showPower}
            isLandscape={this.state.isLandscape}
            initDismount={this.props.initDismount}
          />
        </div>
        <GameMobileSmashButton
          smashed={this.state.smashed}
          onSmash={this.onSmash}
          showMobileSmashButton={this.props.showMobileSmashButton}
          isLandscape={this.state.isLandscape}
          initDismount={this.props.initDismount}
        />
      </div>
    )
  }
}