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