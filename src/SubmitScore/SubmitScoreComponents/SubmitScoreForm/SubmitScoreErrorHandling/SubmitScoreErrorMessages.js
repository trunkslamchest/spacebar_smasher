import React from 'react'

const SubmitScoreErrorMessages = (props) => {

  let errorMessageArr = [ ]
  let headerText

  props.validationErrors.forEach(error => {
    if(Object.values(error).length > 2) {
      errorMessageArr.push(<p key={error.code} ><span>ERR_CODE {error.code}<span>:</span></span> { error.msg }<span><span>:</span></span></p>)
        for(let data in error){
          if(typeof error[data] === "object") errorMessageArr.push(<span key={error.code + props.validationErrors.indexOf(error)} >{ error[data].join(" ") }</span>)
        }
    } else {
      errorMessageArr.push(<p key={error.code} ><span>ERR_CODE {error.code}<span>:</span></span> { error.msg }</p>)
    }
  })

  if (props.validationErrors.length > 1) headerText = "You cannot post a score on the Leaderboard due to the following problems:"
  else headerText = "You cannot post a score on the Leaderboard due to the following problem:"

  return(
    <>
    <div className="submit_score_error_header">
      <h1>
        { headerText }
      </h1>
    </div>
    <div className="submit_score_error_message_wrapper">
      { errorMessageArr }
    </div>
    <div className="submit_score_error_bottom_message">
      { props.fixingRedux ? "Attempting to Fixing Redux" : props.fixedRedux ? "Redux Successfully Fixed" : props.broName }
    </div>
    </>
  )
}

export default SubmitScoreErrorMessages