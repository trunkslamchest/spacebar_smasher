const tagLinesArr = [
    "All Spacebars Go To Heaven",
    "A Spacebar Is Forever",
    "Eat At Joes",
    "Don't Raise The Bar. Smash It",
    "Good To The Last Smash",
    "HTFML Certified",
    "I'm Smashin It",
    "Just Smash It",
    "Let Out All The Pain",
    "Like A Tiger's Claw",
    "More Bars in More Spaces",
    "Never Trust Ali",
    "Smash Different",
    "Smash The Rainbow",
    "The Quicker Smasher Upper",
    "The Spacebar Of Champions",
    "The Ultimate Smashing Machine",
  ]

const tagLines = {
  arr: tagLinesArr,
  random: (() => { return tagLinesArr[Math.floor(Math.random() * tagLinesArr.length)] })()
}

export default tagLines