import React from 'react'
import { useEffect } from 'react'

import './Error.css'

const E404 = () => {

  useEffect(() => { document.title = "Spacebar Smasher - 404 Error" }, [])

  return(
    <div className="error_div">
      <h3>404 Error</h3>
    </div>
  )
}

export default E404
