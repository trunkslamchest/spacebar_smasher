import React from 'react'
import { connect } from 'react-redux'

import { footerFinePrint } from '../../FooterFunctions/classSwitch'

import './FooterFinePrintDesktop.css'
import './FooterFinePrintMobileLandscape.css'
import './FooterFinePrintMobilePortrait.css'

const FooterFinePrint = (props) => {

  let finePrint

  if(props.detect.device === 'mobile'){
    finePrint = <>
      <p>© 2020</p>
      <p>Created by Jamal Farah & Austin Smith</p>
      <p>0.37.6 | 07.24.20</p>
      <p>L.P. © Spacebar Smasher 2020</p>
    </>
  } else {
    finePrint = <>
      <p>© 2020 Created by Jamal Farah & Austin Smith</p>
      <p>0.37.6 | 07.24.20</p>
      <p>All Spacebar Smasher logos and marks depicted herein are the property of Spacebar Smasher Enterprises and may not be reproduced without the prior written consent of Spacebar Smasher Enterprises, L.P. © Spacebar Smasher 2020</p>
    </>
  }

  return(
    <div className={ footerFinePrint(props).finePrint }>
      { finePrint }
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect
  }
}

export default connect(mapStateToProps)(FooterFinePrint)