export const footerContainer = (props) => {

  var obj = {
    container: '',
  }

  if(props.detect.device === "mobile"){
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) {
        obj['container'] = "dismount_footer_mobile_container_landscape"
      } else {
        obj['container'] = "footer_mobile_container_landscape"
      }
    } else {
      if(props.ui.initDismount) {
        obj['container'] = "dismount_footer_mobile_container_portrait"
      } else {
        obj['container'] = "footer_mobile_container_portrait"
      }
    }
  } else {
    if(props.ui.initDismount) {
      obj['container'] = "dismount_footer_desktop_container"
    } else {
      obj['container'] = "footer_desktop_container"
    }
  }

  return obj
}

export const footerFinePrint = (props) => {

  var obj = {
    finePrint: ''
  }

  if(props.detect.device === "mobile"){
    if(props.detect.orientation === "landscape") {
      obj['finePrint'] = "footer_fine_print_mobile_landscape"
    } else {
      obj['finePrint'] = "footer_fine_print_mobile_portrait"
    }
  } else {
    obj['finePrint'] = "footer_fine_print_desktop"
  }

  return obj
}

export const footerLogos = (props) => {

  var obj = {
    container: '',
    button: ''
  }

  if(props.detect.device === "mobile"){
    if(props.detect.orientation === "landscape") {
      obj['container'] = "footer_logos_mobile_container_landscape"
      obj['button'] = "logo_rectangle_mobile_landscape"
    } else {
      obj['container'] = "footer_logos_mobile_container_portrait"
      obj['button'] = "logo_rectangle_mobile_portrait"
    }
  } else {
    obj['container'] = "footer_logos_desktop_container"
    obj['button'] = "logo_rectangle_desktop"
  }

  return obj
}