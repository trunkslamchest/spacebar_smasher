import * as actionTypes from './actionTypes'

export const getScoreboard = (value) => {
  return{
    type: actionTypes.GETSCOREBOARD,
    scoreboard: value
  }
}