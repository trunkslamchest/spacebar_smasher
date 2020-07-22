import * as actionTypes from '../actions/actionTypes'

const initialState = {
    allScores: [],
    addedScore: {}
  }

const scoreboardReducer = (currentState = initialState, action) => {
  switch(action.type){
    case actionTypes.GETSCOREBOARD:
      return{
        ...currentState,
        allScores: action.allScores
      }
    case actionTypes.ADDSCORE:
      return{
        ...currentState,
        addedScore: action.addedScore
      }
    case actionTypes.CLEARSCORE:
      return{
        ...currentState,
        addedScore: action.clearScore
      }
    default: return currentState
  }
}

export default scoreboardReducer