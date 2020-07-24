import React from 'react'

import './PostGameDesktopButton.css'
import './PostGameMobileButtonLandscape.css'
import './PostGameMobileButtonPortrait.css'

const PostGameButton = (props) => {
  return(
    <button
      nav={ props.nav }
      name={ props.name }
      className={ props.classSwitch }
      onClick={ props.onDismount }
    >
      {props.children}
    </button>
  )
}

export default PostGameButton
