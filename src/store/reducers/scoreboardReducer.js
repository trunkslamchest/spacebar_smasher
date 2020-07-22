import * as actionTypes from '../actions/actionTypes'

const initialState = []

const scoreboardReducer = (currentState = initialState, action) => {
  switch(action.type){
    case actionTypes.GETSCOREBOARD:
      return action.scoreboard
    default: return currentState
  }
}

export default scoreboardReducer