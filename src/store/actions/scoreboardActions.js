import * as actionTypes from './actionTypes'

export const getScoreboard = (value) => {
  return{
    type: actionTypes.GETSCOREBOARD,
    allScores: value
  }
}

export const addScore = (value) => {
  return{
    type: actionTypes.ADDSCORE,
    addedScore: value
  }
}

export const clearScore = () => {
  return{
    type: actionTypes.CLEARSCORE
  }
}