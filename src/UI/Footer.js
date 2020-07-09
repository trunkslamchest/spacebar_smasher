import React from 'react'

import './Footer.css'

import firebase_logo from '../assets/footer_logo_firebase.png'
import flatiron_logo from '../assets/footer_logo_flatiron.png'
import github_logo from '../assets/footer_logo_github.png'
import react_logo from '../assets/footer_logo_react.png'

const Footer = (props) => {

  const onClickFooterLinksFunctions = (event) => { }

  // const finePrint = "© 2020 Created by Jamal Farah & Austin Smith. All Spacebar Smasher logos and marks depicted herein are the property of Spacebar Smasher Enterprises and the respective employees and may not be reproduced without the prior written consent of Spacebar Smasher Enterprises, L.P. © Spacebar Smasher 2020. All Rights Reserved. The Zamboni word mark and configuration of the Zamboni ice resurfacing machine are registered trademarks of Frank J. Zamboni & Co., Inc.© Frank J. Zamboni & Co., Inc. 2020.All Rights Reserved. Any other third party trademarks or copyrights are the property of their respective owners. All rights reserved."

  return(
    <div className="footer_container">
      <div className="footer_wrapper">
        <div className="logos">
          <a
            key={"firebase_logo"}
            href="https://firebase.google.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={ firebase_logo }
              className="logo_rectangle"
              alt="Firebase"
              name="footer_firebase_logo"
              interaction="click"
              onClick={ onClickFooterLinksFunctions }
            />
          </a>
          <a
            key={"flatiron_logo"}
            href="https://flatironschool.com/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={ flatiron_logo }
              className="logo_rectangle"
              alt="The Flatiron School"
              name="footer_flatiron_logo"
              interaction="click"
              onClick={ onClickFooterLinksFunctions }
            />
          </a>
          <a
            key={"github_logo"}
            href="https://github.com/trunkslamchest/spacebar_smasher"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={ github_logo }
              className="logo_rectangle"
              alt="Github Repository"
              name="footer_github_logo"
              interaction="click"
              onClick={ onClickFooterLinksFunctions }
            />
          </a>
          <a
            key={"react_logo"}
            href="https://reactjs.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              src={ react_logo }
              className="logo_rectangle"
              alt="React"
              name="footer_react_logo"
              interaction="click"
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