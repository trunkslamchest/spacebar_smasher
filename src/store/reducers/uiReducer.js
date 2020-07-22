import * as actionTypes from '../actions/actionTypes'

const initialState = {
  showFooter: false,
  showWrapper: false,
  initDismount: false,
  postGame: false
}

const switchPostGame = (currentState, action) => {
  let toggle = !currentState.postGame
  return{
    ...currentState,
    postGame: toggle
  }
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
    case actionTypes.INITDISMOUNT:
      return {
        ...currentState,
        initDismount: true
      }
    case actionTypes.EXITDISMOUNT:
      return {
        ...currentState,
        initDismount: false
      }
    case actionTypes.POSTGAME: return switchPostGame(currentState, action)
    default:
      return currentState
  }
}

export default uiReducer