import React from 'react'

import './FooterLogoButton.css'

const FooterLogoButton = (props) => {
  return(
    <a
      href={ props.link }
      rel="noopener noreferrer"
      target="_blank"
    >
      <img
        alt={ props.altText}
        className={ props.buttonClass }
        name={ props.buttonName }
        src={ props.logo }
      />
    </a>
  )
}

export default FooterLogoButton