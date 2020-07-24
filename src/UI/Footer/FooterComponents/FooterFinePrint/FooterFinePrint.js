import React from 'react'
import { connect } from 'react-redux'

import { footerFinePrint } from '../../FooterFunctions/classSwitch'

import './FooterFinePrintDesktop.css'
import './FooterFinePrintMobileLandscape.css'
import './FooterFinePrintMobilePortrait.css'

const FooterFinePrint = (props) => {
  return(
    <div className={ footerFinePrint(props).finePrint }>
      <p>
        © 2020 Created by Jamal Farah & Austin Smith
      </p>
      <p>
        0.37.5 | 07.23.20
      </p>
      <p>
        All Spacebar Smasher logos and marks depicted herein are the property of Spacebar Smasher Enterprises and may not be reproduced without the prior written consent of Spacebar Smasher Enterprises, L.P. © Spacebar Smasher 2020
      </p>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    device: state.detect.device,
    orientation: state.detect.orientation
  }
}

export default connect(mapStateToProps)(FooterFinePrint)