import React from 'react'
import { connect } from 'react-redux'

const Wrapper = (props) => {

  return(
    <>
      { props.ui.wrapper ?
        <div className={ props.divClass }>
          { props.children }
        </div>
      :
        null
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return{
    ui: state.ui
  }
}

export default connect(mapStateToProps)(Wrapper)