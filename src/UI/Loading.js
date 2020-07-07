import React from 'react'

import './Loading.css'

const Loading = (props) => {

  return(
    <div className='loading_container'>
      <div className='loading_animation_container'>
        <div className='lds-roller'><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  )
}

export default Loading