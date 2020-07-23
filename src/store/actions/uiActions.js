import * as actionTypes from './actionTypes'

export const initDismount = (bool) => {
  return{
    type: actionTypes.INITDISMOUNT,
    initDismount: bool
  }
}

export const wrapper = (bool) => {
  return{
    type: actionTypes.WRAPPER,
    wrapper: bool
  }
}

export const footer = (bool) => {
  return{
    type: actionTypes.FOOTER,
    footer: bool
  }
}

export const postGame = (bool) => {
  return{
    type: actionTypes.POSTGAME,
    postGame: bool
  }
}