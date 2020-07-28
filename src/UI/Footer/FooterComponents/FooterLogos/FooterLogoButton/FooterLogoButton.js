import React from 'react'

import './FooterLogoButton.css'

const FooterLogoButton = (props) => {
  return(
    <div className={ props.buttonClass }>
      <a
        href={ props.link }
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt={ props.altText}
          name={ props.buttonName }
          src={ props.logo }
        />
      </a>
    </div>
  )
}

export default FooterLogoButton