import React from 'react'

const SubmitScoreErrorMessages = (props) => {

    let errorMessageArr = [ ]
    let headerText

    props.validationErrors.forEach(error => {
      if(typeof error === "object") {
        let errorArr = Object.entries(error)
        errorMessageArr.push(
          <div key={"99"} >
            <p key={"100"} >
              { errorArr[0][0] }:
            </p>
            <p key={"101"} >
              { errorArr[0][1].join(" ") }
            </p>
          </div>
        )
      } else {
        errorMessageArr.push(
          <p key={props.validationErrors.indexOf(error)} >
            { error }
          </p>
        )
      }
    })

  if(props.validationErrors.length > 1) {
    headerText = "You cannot place a score on the Leaderboard due to one of the following problems:"
  } else {
    headerText = "You cannot place a score on the Leaderboard due to the following problem:"
  }

  console.log(errorMessageArr)

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
        Try Again, { props.broName }
      </div>
    </>
  )
}

export default SubmitScoreErrorMessages