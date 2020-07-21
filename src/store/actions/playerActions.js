import * as actionTypes from './actionTypes'

export const storePlayer = (value) => {
  return {
    type: actionTypes.STOREPLAYER,
    name: value
  }
}

export const resetPlayer = (value) => {
  return {
    type: actionTypes.RESETPLAYER,
  }
}