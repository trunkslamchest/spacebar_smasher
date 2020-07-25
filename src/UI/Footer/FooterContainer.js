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

  state = {
    landscapeFooter: false,
    initDismountLandscapeFooter: false
  }

  onDismountLandscapeFooter = () => {
    this.setState({ initDismountLandscapeFooter: true })

    this.dismountLandscapeFooterTimeout = setTimeout(() => {
      this.setState({ landscapeFooter: false })
    }, 125)

    this.exitDismountLandscapeFooterTimeout = setTimeout(() => {
      this.setState({ initDismountLandscapeFooter: false })
    }, 250)
  }

  onMountLandscapeFooter = () => {
    this.setState({ landscapeFooter: true })
  }

  componentDidUpdate(){
    if(((this.props.detect.device === 'mobile' && this.props.detect.orientation === 'portrait') || this.props.detect.device === 'computer') && this.state.landscapeFooter) {
      this.setState({ landscapeFooter: false })
    }
  }

  componentWillUnmount(){
    clearTimeout(this.dismountLandscapeFooterTimeout)
    clearTimeout(this.exitdisMountLandscapeFooterTimeout)
  }

  render(){

    let footer

    if(this.props.ui.footer){
      if(this.props.detect.device === 'mobile' && this.props.detect.orientation === 'landscape') {
        if(this.props.ui.home || this.props.ui.postGame){
          footer = <FooterMobileButton
                    showLandscapeFooter={ this.onShowLandscapeFooter }
                    onMountLandscapeFooter={ this.onMountLandscapeFooter }
                    onDismountLandscapeFooter={ this.onDismountLandscapeFooter }
                    initDismountLandscapeFooter={ this.state.initDismountLandscapeFooter }
                    landscapeFooter={ this.state.landscapeFooter }
                  />
        } else {
          footer = null
        }
      } else {
        footer = <>
          <FooterLogosContainer />
          <FooterFinePrint />
        </>
      }
    } else footer = null

    return(
      <div className={ footerContainer(this.props).container }>
        { footer }
        { this.state.landscapeFooter ?
          <>
          <Backdrop
            show={ this.state.landscapeFooter }
            initDismount={ this.state.initDismountLandscapeFooter }
          />
          <div className={ this.state.initDismountLandscapeFooter ? "dismount_footer_mobile_wrapper_landscape": "footer_mobile_wrapper_landscape"}>
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