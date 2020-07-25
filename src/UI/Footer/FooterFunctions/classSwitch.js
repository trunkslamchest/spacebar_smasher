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

export const footerLogosContainer = (props) => {

  var obj = {
    logosContainer: '',
  }

  if(props.detect.device === "mobile"){
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) {
        obj['logosContainer'] = "dismount_footer_mobile_logos_container_landscape"
      } else {
        obj['logosContainer'] = "footer_mobile_logos_container_landscape"
      }
    } else {
      if(props.ui.initDismount) {
        obj['logosContainer'] = "dismount_footer_mobile_logos_container_portrait"
      } else {
        obj['logosContainer'] = "footer_mobile_logos_container_portrait"
      }
    }
  } else {
    if(props.ui.initDismount) {
      obj['logosContainer'] = "dismount_footer_desktop_logos_container"
    } else {
      obj['logosContainer'] = "footer_desktop_logos_container"
    }
  }

  return obj
}

export const footerLogos = (props) => {

  var obj = {
    button: ''
  }

  if(props.detect.device === "mobile"){
    if(props.detect.orientation === "landscape") {
      obj['button'] = "logo_mobile_landscape"
    } else {
      obj['button'] = "logo_mobile_portrait"
    }
  } else {
    obj['button'] = "logo_desktop"
  }

  return obj
}

export const footerFinePrint = (props) => {

  var obj = {
    finePrint: ''
  }

  if(props.detect.device === "mobile"){
    if(props.detect.orientation === "landscape") {
      obj['finePrint'] = "footer_mobile_fine_print_landscape"
    } else {
      obj['finePrint'] = "footer_mobile_fine_print_portrait"
    }
  } else {
    obj['finePrint'] = "footer_desktop_fine_print"
  }

  return obj
}