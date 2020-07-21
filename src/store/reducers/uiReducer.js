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
    case actionTypes.SHOWWRAPPER:
      return {
        ...currentState,
        showWrapper: true
      }
    case actionTypes.HIDEWRAPPER:
      return {
        ...currentState,
        showWrapper: false
      }
    default:
      return currentState
  }
}

export default uiReducer