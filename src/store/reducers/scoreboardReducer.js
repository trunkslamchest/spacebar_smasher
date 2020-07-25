import * as actionTypes from '../actions/actionTypes'

const initialState = {
    allScores: [],
    score: {
      name: '',
      avgPres: 1,
      power_level: 0.00,
      power_percent: 0.0,
      score: 0,
      rank: "SUPER BABY FINGERS",
      timestamp: ""
    }
  }

const getScoreboard = (currentState, action) => {
  return{
    ...currentState,
    allScores: action.allScores
  }
}

const clearScore = (currentState, action) => {
  return{
    ...currentState,
    score: action.score
  }
}

const storeScore = (currentState, action) => {
  return{
    ...currentState,
    score: action.score
  }
}

const submitScore = (currentState, action) => {

  var updatedScoreboard

  for(let score in currentState.allScores){
    if(!(currentState.allScores[score][1].score > action.score.score)){
      let lowerScores = currentState.allScores.slice(parseInt(score), currentState.allScores.length + 1)
      lowerScores.forEach(score => score[0] = (parseInt(score[0]) + 1).toString())
      updatedScoreboard = [ ...currentState.allScores.slice(0, score), [score, action.score], ...lowerScores ]
      break
    }
  }

  return{
    ...currentState,
    allScores: updatedScoreboard,
    score: action.score
  }
}

const scoreboardReducer = (currentState = initialState, action) => {
  switch(action.type){
    case actionTypes.GETSCOREBOARD: return getScoreboard(currentState, action)
    case actionTypes.CLEARSCORE: return clearScore(currentState, action)
    case actionTypes.STORESCORE: return storeScore(currentState, action)
    case actionTypes.SUBMITSCORE: return submitScore(currentState, action)
    default: return currentState
  }
}

export default scoreboardReducer