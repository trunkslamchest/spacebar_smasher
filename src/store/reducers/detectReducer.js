import * as actionTypes from '../actions/actionTypes'

const initialState = {
  device: !!navigator.maxTouchPoints ? 'mobile' : 'computer',
  orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
}

const device = (currentState, action) => {
  return{
    ...currentState,
    device: !!navigator.maxTouchPoints ? 'mobile' : 'computer'
  }
}

const orientation = (currentState, action) => {
  return{
    ...currentState,
    orientation: !navigator.maxTouchPoints ? 'desktop' : !window.screen.orientation.angle ? 'portrait' : 'landscape'
  }
}

const detectReducer = (currentState = initialState, action) => {
  switch(action.type){
    case actionTypes.DEVICE: return device(currentState, action)
    case actionTypes.ORIENTATION: return orientation(currentState, action)
    default: return currentState
  }
}

export default detectReducer