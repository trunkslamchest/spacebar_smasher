import React from 'react'

const SubmitScoreErrorMessages = (props) => {

    let errorMessageArr = [ ]

    props.validationErrors.forEach(error => {
      if(typeof error === "object") {
        let errorArr = Object.entries(error)
        errorMessageArr.push(
          <p
            key={props.validationErrors.indexOf(props.validationErrors[errorArr[0]])}
          >
            { errorArr[0][0] }: { errorArr[0][1].join(" ") }
          </p>
        )
      } else {
        errorMessageArr.push(
          <p
            key={props.validationErrors.indexOf(error)}
          >
            { error }
          </p>
        )
      }
    })

  return(
    <>
      <p>
        You cannot place a score on the Leaderboard due to one of the following problems:
      </p>
      { errorMessageArr }
      <p>
        Try Again, { props.broName }
      </p>
    </>
  )
}

export default SubmitScoreErrorMessages