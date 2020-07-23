export const homeContainer = (props) => {

  var obj = {
    wrapper: ''
  }

  if(props.ui.device === "mobile"){
    if(props.ui.orientation === "landscape") {
      if(props.ui.initDismount) {
        obj['wrapper'] = "dismount_home_mobile_wrapper_landscape"
      } else {
        obj['wrapper'] = "home_mobile_wrapper_landscape"
      }
    } else {
      if(props.ui.initDismount) {
        obj['wrapper'] = "dismount_home_mobile_wrapper_portrait"
      } else {
        obj['wrapper'] = "home_mobile_wrapper_portrait"
      }
    }
  } else {
    if(props.ui.initDismount) {
      obj['wrapper'] = "dismount_home_desktop_wrapper"
    } else {
      obj['wrapper'] = "home_desktop_wrapper"
    }
  }

  return obj
}

export const homeHeader = (props) => {

  var obj = {
    wrapper: '',
    header: '',
    startButtonContainer: '',
    startButton: ''
  }

  if(props.detect.device === "mobile"){
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) {
        obj['wrapper'] = "dismount_home_header_mobile_wrapper_landscape"
        obj['header'] = "dismount_home_header_mobile_landscape"
        obj['startButtonContainer'] = "dismount_start_button_container_mobile_landscape"
        obj['startButton'] = "start_button_mobile_landscape"
      } else {
        obj['wrapper'] = "home_header_mobile_wrapper_landscape"
        obj['header'] = "home_header_mobile_landscape"
        obj['startButtonContainer'] = "start_button_container_mobile_landscape"
        obj['startButton'] = "start_button_mobile_landscape"
      }
    } else {
      if(props.ui.initDismount) {
        obj['wrapper'] = "dismount_home_header_mobile_wrapper_portrait"
        obj['header'] = "dismount_home_header_mobile_portrait"
        obj['startButtonContainer'] = "dismount_start_button_container_mobile_portrait"
        obj['startButton'] = "start_button_mobile_portrait"
      } else {
        obj['wrapper'] = "home_header_mobile_wrapper_portrait"
        obj['header'] = "home_header_mobile_portrait"
        obj['startButtonContainer'] = "start_button_container_mobile_portrait"
        obj['startButton'] = "start_button_mobile_portrait"
      }
    }
  } else {
    if(props.ui.initDismount){
      obj['wrapper'] = "dismount_home_header_desktop_wrapper"
      obj['header'] = "dismount_home_header_desktop"
      obj['startButtonContainer'] = "dismount_start_button_container_desktop"
      obj['startButton'] = "start_button_desktop"
    } else {
      obj['wrapper'] = "home_header_desktop_wrapper"
      obj['header'] = "home_header_desktop"
      obj['startButtonContainer'] = "start_button_container_desktop"
      obj['startButton'] = "start_button_desktop"
    }
  }

  return obj
}