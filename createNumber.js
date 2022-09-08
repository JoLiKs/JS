//CodeWars 6 kuy Done!
function createPhoneNumber(numbers){
    let res = []
  for(let i = 0; i<numbers.length;i++) {
      if (i < 3) res.push(numbers[i])
      if (i == 3) {
          res.push(" ")
          res.push(numbers[3])
      }
      if (i>3) res.push(numbers[i])
     if (i == 5) res.push("-")
  }
  res[0] = "("+res[0]
  res[2] = res[2]+")"
  return res.join("")
}
