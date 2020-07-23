import * as actionTypes from './actionTypes'

export const postGame = (bool) => {
  return{
    type: actionTypes.POSTGAME,
    postGame: bool
  }
}