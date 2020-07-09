const detectDevice = (!!navigator.maxTouchPoints || 'ontouchstart' in document.documentElement)

export default detectDevice