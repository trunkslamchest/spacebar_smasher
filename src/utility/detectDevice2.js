const detectDevice2 = (!!navigator.maxTouchPoints || 'ontouchstart' in document.documentElement)

export default detectDevice2

// module.exports = detectDevice2