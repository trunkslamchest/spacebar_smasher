import * as actionTypes from '../actions/actionTypes'

const initialState = {
    allScores: [],
    addedScore: {
      name: "",
      power_level: 0.00,
      power_percent: 0.0,
      score: 0,
      timestamp: ""
    }
  }

const getScoreboard = (currentState, action) => {
  return{
    ...currentState,
    allScores: action.allScores
  }
}

const addScore = (currentState, action) => {

  var updatedScoreboard

  for(let score in currentState.allScores){
    if(!(currentState.allScores[score][1].score > action.addedScore.score)){
      let lowerScores = currentState.allScores.slice(parseInt(score), currentState.allScores.length + 1)
      lowerScores.forEach(score => score[0] = (parseInt(score[0]) + 1).toString())
      updatedScoreboard = [ ...currentState.allScores.slice(0, score), [score, action.addedScore], ...lowerScores ]
      break
    }
  }

  return{
    ...currentState,
    allScores: updatedScoreboard,
    addedScore: action.addedScore
  }
}

const clearScore = (currentState) => {
  return{
    ...currentState,
    addedScore: {
      name: "",
      power_level: 0.00,
      power_percent: 0.0,
      score: 0,
      timestamp: ""
    }
  }
}

const scoreboardReducer = (currentState = initialState, action) => {
  switch(action.type){
    case actionTypes.GETSCOREBOARD: return getScoreboard(currentState, action)
    case actionTypes.ADDSCORE: return addScore(currentState, action)
    case actionTypes.CLEARSCORE: return clearScore(currentState, action)
    default: return currentState
  }
}

export default scoreboardReducer