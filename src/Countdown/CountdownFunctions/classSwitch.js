export const countdownContainer = (props) => {

  var obj = {
    wrapper: '',
    pill: '',
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      obj['wrapper'] = "countdown_mobile_wrapper_landscape"
      obj['pill'] = "countdown_mobile_pill_landscape"
    } else {
      obj['wrapper'] = "countdown_mobile_wrapper_portrait"
      obj['pill'] = "countdown_mobile_pill_portrait"
    }
  } else {
    obj['wrapper'] = "countdown_desktop_wrapper"
    obj['pill'] = "countdown_desktop_pill"
  }

  return obj
}

export const countdownHeader = (props) => {

  var obj = {
    header: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) obj['header'] = "dismount_countdown_mobile_header_landscape"
      else obj['header'] = "countdown_mobile_header_landscape"
    } else {
      if(props.ui.initDismount) obj['header'] = "dismount_countdown_mobile_header_portrait"
      else obj['header'] = "countdown_mobile_header_portrait"
    }
  } else {
    if(props.ui.initDismount) obj['header'] = "dismount_countdown_desktop_header"
    else obj['header'] = "countdown_desktop_header"
  }

  return obj
}

export const countdownTimer = (props) => {

  var obj = {
    wrapper: '',
    timer: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) obj['wrapper'] = "dismount_countdown_mobile_timer_landscape"
      else obj['wrapper'] = "countdown_mobile_timer_landscape"
    } else {
      if(props.ui.initDismount) obj['wrapper'] = "dismount_countdown_mobile_timer_portrait"
      else obj['wrapper'] = "countdown_mobile_timer_portrait"
    }
  } else {
    if(props.ui.initDismount) obj['wrapper'] = "dismount_countdown_desktop_timer"
    else obj['wrapper'] = "countdown_desktop_timer"
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      (props.time === 5 || props.time === 4) ?
          obj['timer'] = "countdown_mobile_timer_five_landscape"
        :
          (props.time === 3 || props.time === 2) ?
            obj['timer'] = "countdown_mobile_timer_three_landscape"
          :
            (props.time === 1) ?
              obj['timer'] = "countdown_mobile_timer_one_landscape"
            :
              (props.time === 0) ?
                obj['timer'] = "countdown_mobile_timer_go_landscape"
              :
                obj['timer'] = "countdown_mobile_timer_blank_landscape"
    } else {
      (props.time === 5 || props.time === 4) ?
          obj['timer'] = "countdown_mobile_timer_five_portrait"
        :
          (props.time === 3 || props.time === 2) ?
            obj['timer'] = "countdown_mobile_timer_three_portrait"
          :
            (props.time === 1) ?
              obj['timer'] = "countdown_mobile_timer_one_portrait"
            :
              (props.time === 0) ?
                obj['timer'] = "countdown_mobile_timer_go_portrait"
              :
                obj['timer'] = "countdown_mobile_timer_blank_portrait"
    }
  } else {
      (props.time === 5 || props.time === 4) ?
        obj['timer'] = "countdown_desktop_timer_five"
      :
        (props.time === 3 || props.time === 2) ?
          obj['timer'] = "countdown_desktop_timer_three"
        :
          (props.time === 1) ?
            obj['timer'] = "countdown_desktop_timer_one"
          :
            (props.time === 0) ?
              obj['timer'] = "countdown_desktop_timer_go"
            :
              obj['timer'] = "countdown_desktop_timer_blank"
  }

  return obj
}

export const countdownTutorial = (props) => {
  var obj = {
    tutorial: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) obj['tutorial'] = "dismount_countdown_mobile_tutorial_landscape"
      else obj['tutorial'] = "countdown_mobile_tutorial_landscape"
    } else {
      if(props.ui.initDismount) obj['tutorial'] = "dismount_countdown_mobile_tutorial_portrait"
      else obj['tutorial'] = "countdown_mobile_tutorial_portrait"
    }
  } else {
    if(props.ui.initDismount) obj['tutorial'] = "dismount_countdown_desktop_tutorial"
    else obj['tutorial'] = "countdown_desktop_tutorial"
  }

  return obj
}