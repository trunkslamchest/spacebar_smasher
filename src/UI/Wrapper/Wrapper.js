import React, { Suspense } from 'react'
import { connect } from 'react-redux'

const Wrapper = (props) => {

  return(
    <>
      { props.ui.wrapper ? (
      <Suspense>
        <div className={ props.divClass }>
          { props.children }
        </div>
      </Suspense>)
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