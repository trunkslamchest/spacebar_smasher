import React from 'react'
import { useEffect } from 'react'

import './Error.css'

const E404 = (props) => {

  useEffect(() => {
    document.title = "Spacebar Smasher - 404 Error"
  }, [])

  return(
    <div className="error_container">
      <div className="error_wrapper">
        <h3>404 Error</h3>
      </div>
    </div>
  )
}

export default E404
