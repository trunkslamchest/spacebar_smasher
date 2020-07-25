import React from 'react'
import { connect } from 'react-redux'

import { footerContainer } from './FooterFunctions/classSwitch'

import FooterLogosContainer from './FooterComponents/FooterLogos/FooterLogosContainer'
import FooterFinePrint from './FooterComponents/FooterFinePrint/FooterFinePrint'
import FooterMobileButton from './FooterComponents/FooterMobileButton/FooterMobileButton'

import Backdrop from '../backdrop/backdrop'

import './FooterContainer.css'
import './FooterContainerOnmount.css'
import './FooterContainerDismount.css'

class FooterContainer extends React.Component {

  state = { landscapeFooter: false }

  onShowLandscapeFooter = () => {
    let switchState = !this.state.landscapeFooter
    this.setState({ landscapeFooter: switchState })
  }

  componentDidUpdate(){
    if(this.props.detect.device === 'mobile' && this.props.detect.orientation === 'portrait' && this.state.landscapeFooter) {
      this.setState({ landscapeFooter: false })
    }
  }

  render(){

    let footer

    if(this.props.ui.footer){
      if(this.props.detect.device === 'mobile' && this.props.detect.orientation === 'landscape') {
        if(this.props.ui.home || this.props.ui.postGame){
          footer = <FooterMobileButton showLandscapeFooter={ this.onShowLandscapeFooter } landscapeFooter={ this.state.landscapeFooter } />
        } else {
          footer = <></>
        }
      } else {
        footer = <>
          <FooterLogosContainer />
          <FooterFinePrint />
        </>
      }
    } else footer = <></>

    return(
      <div className={ footerContainer(this.props).container }>
        { footer }
        { this.state.landscapeFooter ?
          <>
          <Backdrop
            show={ this.state.landscapeFooter }
            initDismount={ this.props.initDismount }
          />
          <div className="footer_mobile_wrapper_landscape">
            <FooterLogosContainer />
            <FooterFinePrint />
          </div>
        </>
        :
          null
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    detect: state.detect,
    ui: state.ui
  }
}

export default connect(mapStateToProps)(FooterContainer)