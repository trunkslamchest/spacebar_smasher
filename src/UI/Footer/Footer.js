import React from 'react'

import './Footer.css'

import firebase_logo from '../../assets/footer_logo_firebase.png'
import flatiron_logo from '../../assets/footer_logo_flatiron2.png'
import github_logo from '../../assets/footer_logo_github.png'
import HVH_logo from '../../assets/footer_logo_HVH4.png'
import react_logo from '../../assets/footer_logo_react2.png'

const Footer = (props) => {

  const onClickFooterLinksFunctions = (event) => { }

  // const finePrint = "© 2020 Created by Jamal Farah & Austin Smith. All Spacebar Smasher logos and marks depicted herein are the property of Spacebar Smasher Enterprises and the respective employees and may not be reproduced without the prior written consent of Spacebar Smasher Enterprises, L.P. © Spacebar Smasher 2020. All Rights Reserved. The Zamboni word mark and configuration of the Zamboni ice resurfacing machine are registered trademarks of Frank J. Zamboni & Co., Inc.© Frank J. Zamboni & Co., Inc. 2020.All Rights Reserved. Any other third party trademarks or copyrights are the property of their respective owners. All rights reserved."

  return(
    <div className="footer_container">
      <div className="footer_wrapper">
        <div className="logos">
          <a
            href="https://firebase.google.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={ firebase_logo }
              className="logo_rectangle"
              alt="Firebase"
              name="footer_logo_firebase"
              onClick={ onClickFooterLinksFunctions }
            />
          </a>
          <a
            href="https://flatironschool.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={ flatiron_logo }
              className="logo_rectangle"
              alt="The Flatiron School"
              name="footer_logo_flatiron"
              onClick={ onClickFooterLinksFunctions }
            />
          </a>
          <a
            href="https://github.com/trunkslamchest/spacebar_smasher"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={ github_logo }
              className="logo_rectangle"
              alt="Github Repository"
              name="footer_logo_github"
              onClick={ onClickFooterLinksFunctions }
            />
          </a>
          <a
            href="https://hudsonvalleyhost.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={ HVH_logo }
              className="logo_rectangle"
              alt="Hudson Valley Host"
              name="footer_logo_HVH"
              onClick={ onClickFooterLinksFunctions }
            />
          </a>
          <a
            href="https://reactjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={ react_logo }
              className="logo_rectangle"
              alt="React"
              name="footer_logo_react"
              onClick={ onClickFooterLinksFunctions }
            />
          </a>
        </div>
        <div className="fine_print">
            <p>
              © 2020 Created by Jamal Farah & Austin Smith
            </p>
            <p>
              All Spacebar Smasher logos and marks depicted herein are the property of Spacebar Smasher Enterprises and the respective employees and may not be reproduced without the prior written consent of Spacebar Smasher Enterprises, L.P. © Spacebar Smasher 2020
            </p>
            <p>
              All Rights Reserved.
            </p>
        </div>
      </div>
    </div>
  )
}

export default Footer