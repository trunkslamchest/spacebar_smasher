const broNameArr = [
    "Bromato",
    "Bronado",
    "Brostrodamus",
    "Brozo the Clown",
    "Angelina Brolie",
    "Marco Brolo",
    "Vincent Van Brogh",
    "Brosef Stalin",
    "Brometheus",
    "Fidel Castbro",
    "Brolden Caulfield",
    "Edgar Allen Bro",
    "Brofessor X",
    "Bromer Simpson",
    "Zambroni",
    "Mr. Brojangles",
    "Brohammed",
    "G.I. Bro",
    "Ringbro Starr",
    "Shaquille Bro’Neal"
  ]

const broNames = {
  arr: broNameArr,
  random: () => { return broNameArr[Math.floor(Math.random() * broNameArr.length)] }
}

export default broNames