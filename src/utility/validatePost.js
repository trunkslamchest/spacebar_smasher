import specialChars from '../datasets/specialChars'

const validatePost = (name, score) => {
  let validation = {
    valid: true,
    errors: []
  }

  let invalidCharArr = []

  if(name === "") validation['errors'] = [ ...validation.errors, "You did not enter a name" ]

  if(name.length < 2) validation['errors'] = [ ...validation.errors, "You entered a name shorter than 2 characters" ]

  for(let char in name) if(specialChars.arr.includes(name[char])) invalidCharArr.push(name[char])

  if(score < 25) validation['errors'] = [ ...validation.errors, "Your score is less than 25" ]

  if(score > 400) validation['errors'] = [ ...validation.errors, `With a score of ${score}, you are probably cheating.` ]


  if(!!invalidCharArr.length) validation['errors'].push({ "You cannot enter a name with any of these characters": invalidCharArr })

  if(!!validation['errors'].length) validation['valid'] = false

  // validation['valid'] = true

  return validation
}

export default validatePost