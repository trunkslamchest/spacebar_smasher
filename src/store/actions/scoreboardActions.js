import * as actionTypes from './actionTypes'

export const getScoreboard = (value) => {
  return{
    type: actionTypes.GETSCOREBOARD,
    allScores: value
  }
}

export const clearScore = () => {
  return{
    type: actionTypes.CLEARSCORE
  }
}

export const storeScore = (value) => {
  return{
    type: actionTypes.STORESCORE,
    score: value
  }
}

export const submitScore = (value) => {
  return{
    type: actionTypes.SUBMITSCORE,
    score: value
  }
}