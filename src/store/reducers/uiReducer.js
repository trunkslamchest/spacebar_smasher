import * as actionTypes from '../actions/actionTypes'

const initialState = {
  initDismount: false,
  wrapper: false,
  footer: false,
  postGame: false
}

const initDismount = (currentState, action) => {
  return{
    ...currentState,
    initDismount: action.initDismount
  }
}

const wrapper = (currentState, action) => {
  return{
    ...currentState,
    wrapper: action.wrapper
  }
}

const footer = (currentState, action) => {
  return{
    ...currentState,
    footer: action.footer
  }
}

const postGame = (currentState, action) => {
  return{
    ...currentState,
    postGame: action.postGame
  }
}

const uiReducer = (currentState = initialState, action) => {
  switch(action.type){
    case actionTypes.INITDISMOUNT: return initDismount(currentState, action)
    case actionTypes.WRAPPER: return wrapper(currentState, action)
    case actionTypes.FOOTER: return footer(currentState, action)
    case actionTypes.POSTGAME: return postGame(currentState, action)
    default: return currentState
  }
}

export default uiReducer