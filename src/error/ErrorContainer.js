import React from 'react'
import { useEffect } from 'react'

import './ErrorContainer.css'

const ErrorContainer = () => {

  useEffect(() => { document.title = "Spacebar Smasher - 404 Error" }, [])

  return(
    <div className="error_container">
      <h3>404 Error</h3>
    </div>
  )
}

export default ErrorContainer
