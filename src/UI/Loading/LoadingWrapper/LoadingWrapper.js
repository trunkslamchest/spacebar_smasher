import React from 'react'
import { connect } from 'react-redux'

import './LoadingWrapper.css'

const LoadingWrapper = (props) => {
  return(
    <div className='loading_wrapper'>
      <div className="loading_bar">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    ui: state.ui
  }
}

export default connect(mapStateToProps)(LoadingWrapper)