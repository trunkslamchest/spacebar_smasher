const getRank = (score) => {
  if (score >= 0 && score < 25) return "SUPER BABY FINGERS"
  else if (score >= 25 && score < 50) return "SLOW HANDS McOLD PERSON"
  else if (score >= 50 && score < 75) return "CEMENT WRISTS"
  else if (score >= 75 && score < 100) return "BIG MEATY CLAWS"
  else if (score >= 100 && score < 125) return "HAIRY KNUCKLES"
  else if (score >= 125 && score < 150) return "EDWARD SCISSOR HANDS"
  else if (score >= 150 && score < 175) return "UNTRUSTABLE ALI"
  else if (score >= 175 && score < 200) return "FURIOUS TIGER"
  else if (score >= 200 && score < 225) return "JACKY FENG"
  else if (score >= 225 && score < 250) return "RUSSIAN SPY"
  else if (score >= 250 && score < 275) return "FROG"
  else if (score >= 275 && score < 300) return "SUPER FROG"
}

export default getRank