import * as actionTypes from '../actions/actionTypes'

const initialState = {
  name: null
}

const playerReducer = (currentState = initialState, action) => {
  switch(action.type){
    case actionTypes.STOREPLAYER:
      return {
        ...currentState,
        name: currentState.name || action.name
      }
    case actionTypes.RESETPLAYER:
      return {
        ...currentState,
        name: null
      }
    default:
      return currentState
  }
}

export default playerReducer