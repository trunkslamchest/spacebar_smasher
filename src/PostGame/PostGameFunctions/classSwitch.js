export const postGameContainer = (props) => {

  var obj = {
    container: '',
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) {
        obj['container'] = "dismount_post_game_mobile_container_landscape"
      } else {
        obj['container'] = "post_game_mobile_container_landscape"
      }
    } else {
      if(props.ui.initDismount) {
        obj['container'] = "dismount_post_game_mobile_container_portrait"
      } else {
        obj['container'] = "post_game_mobile_container_portrait"
      }
    }
  } else {
    if(props.ui.initDismount) {
      obj['container'] = "dismount_post_game_desktop_container"
    } else {
      obj['container'] = "post_game_desktop_container"
    }
  }

  return obj
}

export const postGameButtonsContainer = (props) => {

  var obj = {
    buttonsContainer: '',
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) {
        obj['buttonsContainer'] = "dismount_post_game_mobile_buttons_container_landscape"
      } else {
        obj['buttonsContainer'] = "post_game_mobile_buttons_container_landscape"
      }
    } else {
      if(props.ui.initDismount) {
        obj['buttonsContainer'] = "dismount_post_game_mobile_buttons_container_portrait"
      } else {
        obj['buttonsContainer'] = "post_game_mobile_buttons_container_portrait"
      }
    }
  } else {
    if(props.ui.initDismount) {
      obj['buttonsContainer'] = "dismount_post_game_desktop_buttons_container"
    } else {
      obj['buttonsContainer'] = "post_game_desktop_buttons_container"
    }
  }

  return obj
}

export const postGameButton = (props) => {

  var obj = {
    mainMenuButton: '',
    playAgainButton: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) {
        obj['mainMenuButton'] = "post_game_mobile_main_menu_button_landscape"
        obj['playAgainButton'] = "post_game_mobile_play_again_button_landscape"
      } else {
        obj['mainMenuButton'] = "post_game_mobile_main_menu_button_landscape"
        obj['playAgainButton'] = "post_game_mobile_play_again_button_landscape"
      }
    } else {
      if(props.ui.initDismount) {
        obj['mainMenuButton'] = "post_game_mobile_main_menu_button_portrait"
        obj['playAgainButton'] = "post_game_mobile_play_again_button_portrait"
      } else {
        obj['mainMenuButton'] = "post_game_mobile_main_menu_button_portrait"
        obj['playAgainButton'] = "post_game_mobile_play_again_button_portrait"
      }
    }
  } else {
    if(props.ui.initDismount) {
      obj['mainMenuButton'] = "post_game_desktop_main_menu_button"
      obj['playAgainButton'] = "post_game_desktop_play_again_button"
    } else {
      obj['mainMenuButton'] = "post_game_desktop_main_menu_button"
      obj['playAgainButton'] = "post_game_desktop_play_again_button"
    }
  }

  return obj
}