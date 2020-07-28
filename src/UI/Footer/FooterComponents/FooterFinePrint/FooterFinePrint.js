import React from 'react'
import { connect } from 'react-redux'

import { footerFinePrint } from '../../FooterFunctions/classSwitch'

import './FooterDesktopFinePrint.css'
import './FooterMobileFinePrintLandscape.css'
import './FooterMobileFinePrintPortrait.css'

const FooterFinePrint = (props) => {

  let finePrint

  if(props.detect.device === 'mobile' && props.detect.orientation === 'landscape'){
    finePrint = <>
      <p>Created by</p>
      <p>Jamal Farah</p>
      <p>Austin Smith</p>
      <span/>
      <p>0.37.7 (07.28.20)</p>
      <span/>
      <p>L.P. © Spacebar Smasher 2020</p>
    </>
  } else if (props.detect.device === 'mobile' && props.detect.orientation === 'portrait'){
    finePrint = <>
      <p>Created by Jamal Farah & Austin Smith | 0.37.7 (07.28.20) | L.P. © Spacebar Smasher 2020</p>
      <span/>
      <p>All Spacebar Smasher logos and marks depicted herein are the property of Spacebar Smasher Enterprises and may not be reproduced without the prior written consent of Spacebar Smasher Enterprises</p>
    </>
  } else {
    finePrint = <>
      <p>L.P. © Spacebar Smasher 2020</p>
      <p>Created by Jamal Farah & Austin Smith</p>
      <p>0.37.7 (07.28.20)</p>
      <p>All Spacebar Smasher logos and marks depicted herein are the property of Spacebar Smasher Enterprises and may not be reproduced without the prior written consent of Spacebar Smasher Enterprises</p>
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