import React from 'react'

import './FooterFinePrintDesktop.css'
import './FooterFinePrintMobileLandscape.css'
import './FooterFinePrintMobilePortrait.css'

const FooterFinePrint = (props) => {

  let finePrintClass

  if(props.isMobile){
    if(props.orientation === "landscape" && window.innerWidth < 1024) {
      finePrintClass = "footer_fine_print_mobile_landscape"
    } else {
      finePrintClass = "footer_fine_print_mobile_portrait"
    }
  } else {
    finePrintClass = "footer_fine_print_desktop"
  }

  return(
    <div className={ finePrintClass }>
        <p>
          © 2020 Created by Jamal Farah & Austin Smith
        </p>
        <p>
          version 0.37.2 | 07/18/20
        </p>
        <p>
          All Spacebar Smasher logos and marks depicted herein are the property of Spacebar Smasher Enterprises and may not be reproduced without the prior written consent of Spacebar Smasher Enterprises, L.P. © Spacebar Smasher 2020
        </p>
    </div>
  )
}

export default FooterFinePrint