import React from 'react'
import { connect } from 'react-redux'

import { footerFinePrint } from '../../FooterFunctions/classSwitch'

import './FooterFinePrint.scss'

const FooterFinePrint = (props) => {

  let finePrint

  let verDate = "0.37.8 (08.1.20)"

  if(props.detect.device === 'mobile' && props.detect.orientation === 'landscape'){
    finePrint = <>
      <p>Created by</p>
      <p>Jamal Farah</p>
      <p>Austin Smith</p>
      <span/>
      <p>{ verDate }</p>
      <span/>
      <p>L.P. © Spacebar Smasher 2020</p>
    </>
  } else if (props.detect.device === 'mobile' && props.detect.orientation === 'portrait'){
    finePrint = <>
      <p>Created by Jamal Farah & Austin Smith | { verDate } | L.P. © Spacebar Smasher 2020</p>
      <span/>
      <p>All Spacebar Smasher logos and marks depicted herein are the property of Spacebar Smasher Enterprises and may not be reproduced without the prior written consent of Spacebar Smasher Enterprises</p>
    </>
  } else {
    finePrint = <>
      <p>L.P. © Spacebar Smasher 2020</p>
      <p>Created by Jamal Farah & Austin Smith</p>
      <p>{ verDate }</p>
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