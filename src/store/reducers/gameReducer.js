import * as actionTypes from '../actions/actionTypes'

const initialState = {
  postGame: false,
}

const postGame = (currentState, action) => {
  return{
    ...currentState,
    postGame: action.postGame
  }
}

const gameReducer = (currentState = initialState, action) => {
  switch(action.type){
    case actionTypes.POSTGAME: return postGame(currentState, action)
    default: return currentState
  }
}

export default gameReducer