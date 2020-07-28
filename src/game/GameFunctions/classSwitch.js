export const gameContainer = (props) => {

  var obj = {
    wrapper: '',
    pill: '',
    row: '',
    subRow: '',
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === 'landscape') {
      obj['row'] = 'game_mobile_landscapeR1'
      obj['subRow'] = 'game_mobile_landscapeSR1'
      if(props.ui.initDismount) {
          obj['wrapper'] = "game_mobile_wrapper_landscape"
          obj['pill'] = "dismount_game_mobile_pill_landscape"
      } else {
          obj['wrapper'] = "game_mobile_wrapper_landscape"
          obj['pill'] = "game_mobile_pill_landscape"
      }
    } else {
      obj['row'] = 'game_mobile_portraitR1'
      obj['subRow'] = 'game_mobile_portraitSR1'
      if(props.ui.initDismount) {
        obj['wrapper'] = "game_mobile_wrapper_portrait"
        obj['pill'] = "dismount_game_mobile_pill_portrait"
      } else {
        obj['wrapper'] = "game_mobile_wrapper_portrait"
        obj['pill'] = "game_mobile_pill_portrait"
      }
    }
  } else {
    obj['wrapper'] = "game_desktop_wrapper"
    obj['pill'] = "game_desktop_pill"
  }

  return obj
}

export const gameTimer = (props) => {

  var obj = {
    timer: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      obj['timer'] = "game_mobile_timer_landscape"
    } else {
      obj['timer'] = "game_mobile_timer_portrait"
    }
  } else {
    if(props.ui.initDismount) obj['timer'] = "dismount_game_desktop_timer"
    else obj['timer'] = "game_desktop_timer"
  }

  return obj
}

export const gameCounter = (props) => {

  var obj = {
    counter: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      obj['counter'] = "game_mobile_counter_landscape"
    } else {
      obj['counter'] = "game_mobile_counter_portrait"
    }
  } else {
    if(props.ui.initDismount) obj['counter'] = "dismount_game_desktop_counter"
    else obj['counter'] = "game_desktop_counter"
  }

  return obj
}

export const gameRank = (props) => {

  var obj = {
    rank: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      obj['rank'] = "game_mobile_rank_landscape"
    } else {
      obj['rank'] = "game_mobile_rank_portrait"
    }
  } else {
    if(props.ui.initDismount) obj['rank'] = "dismount_game_desktop_rank"
    else obj['rank'] = "game_desktop_rank"
  }

  return obj
}

export const gamePower = (props) => {

  var obj = {
    power: '',
    powerBar: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      obj['power'] = "game_mobile_power_landscape"
      obj['powerBar'] = "game_mobile_power_bar_landscape"
    } else {
      obj['power'] = "game_mobile_power_portrait"
      obj['powerBar'] = "game_mobile_power_bar_portrait"
    }
  } else {
    if(props.ui.initDismount) {
      obj['power'] = "dismount_game_desktop_power"
      obj['powerBar'] = "game_desktop_power_bar"
    } else {
      obj['power'] = "game_desktop_power"
      obj['powerBar'] = "game_desktop_power_bar"
    }
  }

  return obj
}

export const gameMobileSmashButton = (props) => {

  var obj = {
    container: '',
    button: ''
  }

    if(props.detect.orientation === "landscape") {
      obj['container'] = "game_mobile_smash_button_landscape"
      obj['button'] = "smash_button_landscape"
    } else {
      obj['container'] = "game_mobile_smash_button_portrait"
      obj['button'] = "smash_button_portrait"
    }

  return obj
}