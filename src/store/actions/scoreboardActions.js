import * as actionTypes from './actionTypes'

export const getScoreboard = (value) => {
  return{
    type: actionTypes.GETSCOREBOARD,
    allScores: value
  }
}

export const clearScore = () => {
  return{
    type: actionTypes.CLEARSCORE,
    score: {
      name: '',
      avgPres: 1,
      power_level: 0.00,
      power_percent: 0.0,
      score: 0,
      rank: "SUPER BABY FINGERS",
      timestamp: ""
    }
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