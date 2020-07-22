import React from 'react'
import { connect } from 'react-redux'

import ScoreboardRow from './ScoreboardRow/ScoreboardRow'

import LoadingScoreboard from '../UI/Loading/LoadingScoreboard/LoadingScoreboard'

import './ScoreboardDesktopContainer.css'
import './ScoreboardDesktopOnmount.css'
import './ScoreboardDesktopDismount.css'

import './ScoreboardMobileContainerLandscape.css'
import './ScoreboardMobileContainerPortrait.css'
import './ScoreboardMobileOnmount.css'
import './ScoreboardMobileDismount.css'

const ScoreboardContainer = (props) => {

  const scores =  props.scoreboard.allScores.map(score =>
    <ScoreboardRow
      place={props.scoreboard.allScores.indexOf(score) + 1}
      key={score[0]}
      score={score[1]}
    />
  )

  let tableClass, headerClass, headRowClass, rowWrapperClass

  if(props.ui.postGame) {
    if(props.detect.device === "mobile"){
      if(props.detect.orientation === "landscape") {
        if(props.ui.initDismount) {
          tableClass = "dismount_scoreboard_table_mobile_post_game_landscape"
          headerClass = "scoreboard_header_mobile_landscape"
          headRowClass = "scoreboard_head_row_mobile_landscape"
          rowWrapperClass = "scoreboard_row_wrapper_mobile_landscape"
        } else {
          tableClass = "scoreboard_table_mobile_post_game_landscape"
          headerClass = "scoreboard_header_mobile_landscape"
          headRowClass = "scoreboard_head_row_mobile_landscape"
          rowWrapperClass = "scoreboard_row_wrapper_mobile_landscape"
        }
      } else {
        if(props.ui.initDismount) {
          tableClass = "dismount_scoreboard_table_mobile_post_game_portrait"
          headerClass = "scoreboard_header_mobile_portrait"
          headRowClass = "scoreboard_head_row_mobile_portrait"
          rowWrapperClass = "scoreboard_row_wrapper_mobile_portrait"
        } else {
          tableClass = "scoreboard_table_mobile_post_game_portrait"
          headerClass = "scoreboard_header_mobile_portrait"
          headRowClass = "scoreboard_head_row_mobile_portrait"
          rowWrapperClass = "scoreboard_row_wrapper_mobile_portrait"
        }
      }
    } else {
      if(props.ui.initDismount){
        tableClass = "dismount_scoreboard_table_desktop_post_game"
        headerClass = "scoreboard_header_desktop"
        headRowClass = "scoreboard_head_row_desktop"
        rowWrapperClass = "scoreboard_sub_row_desktop"
      } else {
        tableClass = "scoreboard_table_desktop_post_game"
        headerClass = "scoreboard_header_desktop"
        headRowClass = "scoreboard_head_row_desktop"
        rowWrapperClass = "scoreboard_sub_row_desktop"
      }
    }
  } else {
    if(props.detect.device === "mobile"){
      if(props.detect.orientation === "landscape") {
        if(props.ui.initDismount) {
          tableClass = "dismount_scoreboard_table_mobile_landscape"
          headerClass = "scoreboard_header_mobile_landscape"
          headRowClass = "scoreboard_head_row_mobile_landscape"
          rowWrapperClass = "scoreboard_row_wrapper_mobile_landscape"
        } else {
          tableClass = "scoreboard_table_mobile_landscape"
          headerClass = "scoreboard_header_mobile_landscape"
          headRowClass = "scoreboard_head_row_mobile_landscape"
          rowWrapperClass = "scoreboard_row_wrapper_mobile_landscape"
        }
      } else {
        if(props.ui.initDismount) {
          tableClass = "dismount_scoreboard_table_mobile_portrait"
          headerClass = "scoreboard_header_mobile_portrait"
          headRowClass = "scoreboard_head_row_mobile_portrait"
          rowWrapperClass = "scoreboard_row_wrapper_mobile_portrait"
        } else {
          tableClass = "scoreboard_table_mobile_portrait"
          headerClass = "scoreboard_header_mobile_portrait"
          headRowClass = "scoreboard_head_row_mobile_portrait"
          rowWrapperClass = "scoreboard_row_wrapper_mobile_portrait"
        }
      }
    } else {
      if(props.ui.initDismount){
        tableClass = "dismount_scoreboard_table_desktop"
        headerClass = "scoreboard_header_desktop"
        headRowClass = "scoreboard_head_row_desktop"
        rowWrapperClass = "scoreboard_sub_row_desktop"
      } else {
        tableClass = "scoreboard_table_desktop"
        headerClass = "scoreboard_header_desktop"
        headRowClass = "scoreboard_head_row_desktop"
        rowWrapperClass = "scoreboard_sub_row_desktop"
      }
    }
  }

  return(
      <div className={ tableClass }>
        <div className={ headerClass } >
            <h1>LEADERBOARD</h1>
        </div>
        <div className={ headRowClass }>
          <h1>PLACE</h1>
          <h1>NAME</h1>
          <h1>POWER LEVEL</h1>
          <h1>SCORE</h1>
          <h1>SCROLLBAR</h1>
        </div>
          { props.mounted ?
            <div className={ rowWrapperClass }>
              { scores }
            </div>
          :
            <LoadingScoreboard />
          }
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    scoreboard: state.scoreboard,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(ScoreboardContainer)