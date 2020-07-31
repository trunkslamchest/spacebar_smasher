export const scoreboardContainer = (props) => {

  var obj = {
    table: '',
    header: '',
    headRow: '',
    row: ''
  }

  if(props.ui.postGame) {
    if(props.detect.device === "mobile"){
      if(props.detect.orientation === "landscape") {
        if(props.ui.initDismount) {
          obj['table'] = "dismount_scoreboard_table_mobile_post_game_landscape"
          obj['header'] = "scoreboard_header_mobile_landscape"
          obj['headRow'] = "scoreboard_head_row_mobile_landscape"
          obj['row'] = "scoreboard_sub_row_mobile_landscape"
        } else {
          obj['table'] = "scoreboard_table_mobile_post_game_landscape"
          obj['header'] = "scoreboard_header_mobile_landscape"
          obj['headRow'] = "scoreboard_head_row_mobile_landscape"
          obj['row'] = "scoreboard_sub_row_mobile_landscape"
        }
      } else {
        if(props.ui.initDismount) {
          obj['table'] = "dismount_scoreboard_table_mobile_post_game_portrait"
          obj['header'] = "scoreboard_header_mobile_portrait"
          obj['headRow'] = "scoreboard_head_row_mobile_portrait"
          obj['row'] = "scoreboard_sub_row_mobile_portrait"
        } else {
          obj['table'] = "scoreboard_table_mobile_post_game_portrait"
          obj['header'] = "scoreboard_header_mobile_portrait"
          obj['headRow'] = "scoreboard_head_row_mobile_portrait"
          obj['row'] = "scoreboard_sub_row_mobile_portrait"
        }
      }
    } else {
      if(props.ui.initDismount){
        obj['table'] = "dismount_scoreboard_table_desktop_post_game"
        obj['header'] = "scoreboard_header_desktop"
        obj['headRow'] = "scoreboard_head_row_desktop"
        obj['row'] = "scoreboard_sub_row_desktop"
      } else {
        obj['table'] = "scoreboard_table_desktop_post_game"
        obj['header'] = "scoreboard_header_desktop"
        obj['headRow'] = "scoreboard_head_row_desktop"
        obj['row'] = "scoreboard_sub_row_desktop"
      }
    }
  } else {
    if(props.detect.device === "mobile"){
      if(props.detect.orientation === "landscape") {
        if(props.ui.initDismount) {
          obj['table'] = "dismount_scoreboard_table_mobile_landscape"
          obj['header'] = "scoreboard_header_mobile_landscape"
          obj['headRow'] = "scoreboard_head_row_mobile_landscape"
          obj['row'] = "scoreboard_sub_row_mobile_landscape"
        } else {
          obj['table'] = "scoreboard_table_mobile_landscape"
          obj['header'] = "scoreboard_header_mobile_landscape"
          obj['headRow'] = "scoreboard_head_row_mobile_landscape"
          obj['row'] = "scoreboard_sub_row_mobile_landscape"
        }
      } else {
        if(props.ui.initDismount) {
          obj['table'] = "dismount_scoreboard_table_mobile_portrait"
          obj['header'] = "scoreboard_header_mobile_portrait"
          obj['headRow'] = "scoreboard_head_row_mobile_portrait"
          obj['row'] = "scoreboard_sub_row_mobile_portrait"
        } else {
          obj['table'] = "scoreboard_table_mobile_portrait"
          obj['header'] = "scoreboard_header_mobile_portrait"
          obj['headRow'] = "scoreboard_head_row_mobile_portrait"
          obj['row'] = "scoreboard_sub_row_mobile_portrait"
        }
      }
    } else {
      if(props.ui.initDismount){
        obj['table'] = "dismount_scoreboard_table_desktop"
        obj['header'] = "scoreboard_header_desktop"
        obj['headRow'] = "scoreboard_head_row_desktop"
        obj['row'] = "scoreboard_sub_row_desktop"
      } else {
        obj['table'] = "scoreboard_table_desktop"
        obj['header'] = "scoreboard_header_desktop"
        obj['headRow'] = "scoreboard_head_row_desktop"
        obj['row'] = "scoreboard_sub_row_desktop"
      }
    }
  }

  return obj
}

export const scoreboardRow = (props) => {

  var obj = {
    highlighted: '',
    row: '',
    place: '',
    name: '',
    power: '',
    score: ''
  }

  if(props.ui.postGame) {
    if(props.detect.device === "mobile"){
      if(props.detect.orientation === "landscape") {
        obj['highlighted'] = "highlighted_row_mobile_landscape"
        obj['row'] = "scoreboard_row_mobile_landscape"
        obj['place'] = "scoreboard_row_place_mobile_landscape"
        obj['name'] = "scoreboard_row_name_mobile_landscape"
        obj['power'] = "scoreboard_row_power_mobile_landscape"
        obj['score'] = "scoreboard_row_score_mobile_landscape"
      } else {
        obj['highlighted'] = "highlighted_row_mobile_portrait"
        obj['row'] = "scoreboard_row_mobile_portrait"
        obj['place'] = "scoreboard_row_place_mobile_portrait"
        obj['name'] = "scoreboard_row_name_mobile_portrait"
        obj['power'] = "scoreboard_row_power_mobile_portrait"
        obj['score'] = "scoreboard_row_score_mobile_portrait"
      }
    } else {
      obj['highlighted'] = "highlighted_row_desktop"
      obj['row'] = "scoreboard_row_desktop"
      obj['place'] = "scoreboard_row_place_desktop"
      obj['name'] = "scoreboard_row_name_desktop"
      obj['power'] = "scoreboard_row_power_desktop"
      obj['score'] = "scoreboard_row_score_desktop"
    }
  } else {
    if(props.detect.device === "mobile"){
      if(props.detect.orientation === "landscape") {
        obj['highlighted'] = "highlighted_row_mobile_landscape"
        obj['row'] = "scoreboard_row_mobile_landscape"
        obj['place'] = "scoreboard_row_place_mobile_landscape"
        obj['name'] = "scoreboard_row_name_mobile_landscape"
        obj['power'] = "scoreboard_row_power_mobile_landscape"
        obj['score'] = "scoreboard_row_score_mobile_landscape"
      } else {
        obj['highlighted'] = "highlighted_row_mobile_portrait"
        obj['row'] = "scoreboard_row_mobile_portrait"
        obj['place'] = "scoreboard_row_place_mobile_portrait"
        obj['name'] = "scoreboard_row_name_mobile_portrait"
        obj['power'] = "scoreboard_row_power_mobile_portrait"
        obj['score'] = "scoreboard_row_score_mobile_portrait"
      }
    } else {
      obj['highlighted'] = "highlighted_row_desktop"
      obj['row'] = "scoreboard_row_desktop"
      obj['place'] = "scoreboard_row_place_desktop"
      obj['name'] = "scoreboard_row_name_desktop"
      obj['power'] = "scoreboard_row_power_desktop"
      obj['score'] = "scoreboard_row_score_desktop"
    }
  }

  return obj
}