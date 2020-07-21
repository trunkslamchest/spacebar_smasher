import * as actionTypes from '../actions/actionTypes'

const initialState = {
  showFooter: false,
  showWrapper: false
}

const uiReducer = (currentState = initialState, action) => {
  switch(action.type){
    case actionTypes.SHOWFOOTER:
      return {
        ...currentState,
        showFooter: true
      }
    case actionTypes.HIDEFOOTER:
      return {
        ...currentState,
        showFooter: false
      }
    default:
      return currentState
  }
}

export default uiReducer