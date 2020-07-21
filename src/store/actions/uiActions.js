import * as actionTypes from './actionTypes'

export const showFooter = () => {
  return{
    type: actionTypes.SHOWFOOTER
  }
}

export const hideFooter = () => {
  return{
    type: actionTypes.HIDEFOOTER
  }
}

export const showWrapper = () => {
  return{
    type: actionTypes.SHOWWRAPPER
  }
}

export const hideWrapper = () => {
  return{
    type: actionTypes.HIDEWRAPPER
  }
}

export const initDismount = () => {
  return{
    type: actionTypes.INITDISMOUNT
  }
}

export const exitDismount = () => {
  return{
    type: actionTypes.EXITDISMOUNT
  }
}