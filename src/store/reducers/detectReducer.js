import * as actionTypes from '../actions/actionTypes'

const initialState = {
  device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
  orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
}

const detectReducer = (currentState = initialState, action) => {
  switch(action.type){
    case actionTypes.DEVICE:
      return {
        ...currentState,
        device: !!navigator.maxTouchPoints ? 'mobile' : 'computer'
      }
    case actionTypes.ORIENTATION:
      return {
        ...currentState,
        orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
      }
    default:
      return currentState
  }
}

export default detectReducer