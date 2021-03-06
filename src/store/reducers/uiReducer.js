import * as actionTypes from '../actions/actionTypes'

const initialState = {
  home: false,
  initDismount: false,
  wrapper: false,
  footer: false,
  footerLogosContainer: false,
  footerInitDismountLogosContainer: false,
  postGame: false
}

const home = (currentState, action) => {
  return{
    ...currentState,
    home: action.home
  }
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

const footerLogosContainer = (currentState, action) => {
  return{
    ...currentState,
    footerLogosContainer: action.footerLogosContainer
  }
}

const footerInitDismountLogosContainer = (currentState, action) => {
  return{
    ...currentState,
    footerInitDismountLogosContainer: action.footerInitDismountLogosContainer
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
    case actionTypes.HOME: return home(currentState, action)
    case actionTypes.INITDISMOUNT: return initDismount(currentState, action)
    case actionTypes.WRAPPER: return wrapper(currentState, action)
    case actionTypes.FOOTER: return footer(currentState, action)
    case actionTypes.FOOTERLOGOSCONTAINER: return footerLogosContainer(currentState, action)
    case actionTypes.INITDISMOUNTFOOTERLOGOSCONTAINER: return footerInitDismountLogosContainer(currentState, action)

    case actionTypes.POSTGAME: return postGame(currentState, action)
    default: return currentState
  }
}

export default uiReducer