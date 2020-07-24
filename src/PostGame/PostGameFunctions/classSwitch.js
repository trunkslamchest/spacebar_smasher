export const postGame = (props) => {

  var obj = {
    wrapper: '',
    buttonsContainer: '',
    mainMenuButton: '',
    tryAgainButton: ''
  }

  if(props.detect.device === "mobile") {
    if(props.detect.orientation === "landscape") {
      if(props.ui.initDismount) {
        obj['wrapper'] = "dismount_post_game_mobile_wrapper_landscape"
        obj['buttonsContainer'] = "dismount_post_game_mobile_buttons_container_landscape"
        obj['mainMenuButton'] = "post_game_mobile_main_menu_button_landscape"
        obj['playAgainButton'] = "post_game_mobile_play_again_button_landscape"
      } else {
        obj['wrapper'] = "post_game_mobile_wrapper_landscape"
        obj['buttonsContainer'] = "post_game_mobile_buttons_container_landscape"
        obj['mainMenuButton'] = "post_game_mobile_main_menu_button_landscape"
        obj['playAgainButton'] = "post_game_mobile_play_again_button_landscape"
      }
    } else {
      if(props.ui.initDismount) {
        obj['wrapper'] = "dismount_post_game_mobile_wrapper_portrait"
        obj['buttonsContainer'] = "dismount_post_game_mobile_buttons_container_portrait"
        obj['mainMenuButton'] = "post_game_mobile_main_menu_button_portrait"
        obj['playAgainButton'] = "post_game_mobile_play_again_button_portrait"
      } else {
        obj['wrapper'] = "post_game_mobile_wrapper_portrait"
        obj['buttonsContainer'] = "post_game_mobile_buttons_container_portrait"
        obj['mainMenuButton'] = "post_game_mobile_main_menu_button_portrait"
        obj['playAgainButton'] = "post_game_mobile_play_again_button_portrait"
      }
    }
  } else {
    if(props.ui.initDismount) {
      obj['wrapper'] = "dismount_post_game_desktop_wrapper"
      obj['buttonsContainer'] = "dismount_post_game_desktop_buttons_container"
      obj['mainMenuButton'] = "post_game_desktop_main_menu_button"
      obj['playAgainButton'] = "post_game_desktop_play_again_button"
    } else {
      obj['wrapper'] = "post_game_desktop_wrapper"
      obj['buttonsContainer'] = "post_game_desktop_buttons_container"
      obj['mainMenuButton'] = "post_game_desktop_main_menu_button"
      obj['playAgainButton'] = "post_game_desktop_play_again_button"
    }
  }

  return obj
}