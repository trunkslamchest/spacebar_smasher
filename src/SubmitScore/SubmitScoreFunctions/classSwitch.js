export const submitScoreContainer = (props) => {

  var obj = {
    wrapper: '',
    pill: '',
    row: '',
    subRow: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      obj['row'] = 'submit_score_mobile_landscapeR1'
      obj['subRow'] = 'submit_score_mobile_landscapeSR1'
        if(props.ui.initDismount) {
          obj['wrapper'] = "submit_score_mobile_wrapper_landscape"
          obj['pill'] = "dismount_submit_score_mobile_pill_landscape"
        } else {
          obj['wrapper'] = "submit_score_mobile_wrapper_landscape"
          obj['pill'] = "submit_score_mobile_pill_landscape"
        }
    } else {
      obj['row'] = 'submit_score_mobile_portraitR1'
      obj['subRow'] = 'submit_score_mobile_portraitSR1'
      if(props.ui.initDismount) {
        obj['wrapper'] = "submit_score_mobile_wrapper_portrait"
        obj['pill'] = "dismount_submit_score_mobile_pill_portrait"
      } else {
        obj['wrapper'] = "submit_score_mobile_wrapper_portrait"
        obj['pill'] = "submit_score_mobile_pill_portrait"
      }
    }
  } else {
    obj['wrapper'] = "submit_score_desktop_wrapper"
    obj['pill'] = "submit_score_desktop_pill"
  }

  return obj
}

export const submitScoreHeader = (props) => {

  var obj = {
    header: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      obj['header'] = "submit_score_mobile_header_landscape"
    } else {
      obj['header'] = "submit_score_mobile_header_portrait"
    }
  } else {
    if(props.ui.initDismount) obj['header'] = "dismount_submit_score_desktop_header"
    else obj['header'] = "submit_score_desktop_header"
  }

  return obj
}

export const submitScoreCounter = (props) => {

  var obj = {
    counter: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      obj['counter'] = "submit_score_mobile_counter_landscape"
    } else {
      obj['counter'] = "submit_score_mobile_counter_portrait"
    }
  } else {
    if(props.ui.initDismount) {
      obj['counter'] = "dismount_submit_score_desktop_counter"
    } else {
      obj['counter'] = "submit_score_desktop_counter"
    }
  }

  return obj
}

export const submitScoreRank = (props) => {

  var obj = {
    rank: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      obj['rank'] = "submit_score_mobile_rank_landscape"
    } else {
      obj['rank'] = "submit_score_mobile_rank_portrait"
    }
  } else {
    if(props.ui.initDismount) {
      obj['rank'] = "dismount_submit_score_desktop_rank"
    } else {
      obj['rank'] = "submit_score_desktop_rank"
    }
  }

  return obj
}

export const submitScorePower = (props) => {

  var obj = {
    power: '',
    powerBar: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      obj['power'] = "submit_score_mobile_power_landscape"
      obj['powerBar'] = "submit_score_mobile_power_bar_landscape"
    } else {
      obj['power'] = "submit_score_mobile_power_portrait"
      obj['powerBar'] = "submit_score_mobile_power_bar_portrait"
    }
  } else {
    if(props.ui.initDismount) {
      obj['power'] = "dismount_submit_score_desktop_power"
      obj['powerBar'] = "submit_score_desktop_power_bar"
    } else {
      obj['power'] = "submit_score_desktop_power"
      obj['powerBar'] = "submit_score_desktop_power_bar"
    }
  }

  return obj
}

export const submitScoreForm = (props) => {

  var obj = {
    wrapper: '',
    form: '',
    textbox: '',
    button: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      obj['wrapper'] = "submit_score_mobile_form_container_landscape"
      obj['form'] = "submit_score_mobile_form_landscape"
      obj['textbox'] = "submit_score_mobile_text_box_landscape"
      obj['button'] = "submit_score_mobile_button_landscape"
    } else {
      obj['wrapper'] = "submit_score_mobile_form_container_portrait"
      obj['form'] = "submit_score_mobile_form_portrait"
      obj['textbox'] = "submit_score_mobile_text_box_portrait"
      obj['button'] = "submit_score_mobile_button_portrait"
    }
  } else {
    if(props.ui.initDismount) {
      obj['wrapper'] = "dismount_submit_score_desktop_form_container"
      obj['form'] = "submit_score_desktop_form"
      obj['textbox'] = "submit_score_desktop_text_box"
      obj['button'] = "submit_score_desktop_button"
    } else {
      obj['wrapper'] = "submit_score_desktop_form_container"
      obj['form'] = "submit_score_desktop_form"
      obj['textbox'] = "submit_score_desktop_text_box"
      obj['button'] = "submit_score_desktop_button"
    }
  }

  return obj
}

export const submitScoreButtons = (props) => {

  var obj = {
    wrapper: '',
    mainMenuButton: '',
    tryAgainButton: ''
  }

  if(props.detect.device === "mobile"){
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) {
        obj['wrapper'] = "dismount_submit_score_mobile_buttons_container_landscape"
        obj['mainMenuButton'] = "submit_score_mobile_main_menu_button_landscape"
        obj['tryAgainButton'] = "submit_score_mobile_try_again_button_landscape"
      } else {
        obj['wrapper'] = "submit_score_mobile_buttons_container_landscape"
        obj['mainMenuButton'] = "submit_score_mobile_main_menu_button_landscape"
        obj['tryAgainButton'] = "submit_score_mobile_try_again_button_landscape"
      }
    } else {
      if(props.ui.initDismount) {
        obj['wrapper'] = "dismount_submit_score_mobile_buttons_container_portrait"
        obj['mainMenuButton'] = "submit_score_mobile_main_menu_button_portrait"
        obj['tryAgainButton'] = "submit_score_mobile_try_again_button_portrait"
      } else {
        obj['wrapper'] = "submit_score_mobile_buttons_container_portrait"
        obj['mainMenuButton'] = "submit_score_mobile_main_menu_button_portrait"
        obj['tryAgainButton'] = "submit_score_mobile_try_again_button_portrait"
      }
    }
  } else {
    if(props.ui.initDismount) {
        obj['wrapper'] = "dismount_submit_score_desktop_buttons_container"
        obj['mainMenuButton'] = "submit_score_desktop_main_menu_button"
        obj['tryAgainButton'] = "submit_score_desktop_try_again_button"
    } else {
        obj['wrapper'] = "submit_score_desktop_buttons_container"
        obj['mainMenuButton'] = "submit_score_desktop_main_menu_button"
        obj['tryAgainButton'] = "submit_score_desktop_try_again_button"
    }
  }

  return obj
}