//CodeWars 6 kui not work
function spinWords(string){
  let arr = string.split(" ")
  let res = []
  let res2 = []
  let changes = 0
  for(let i = 0; i<arr.length;i++) {
      if (arr[i].length > 4) {
          for(let j = 0; j<arr[i].length;j++) {
              res.unshift(arr[i][j])
          }
      }
      else {
          changes++
          res2.push(arr[i])
      }
  }
    console.log(res2)
  
  res = res.join("").split(" ")
  for (let i = 0; i<res.length; i++) {
      res2.push(res[i])
  }
  const res2L = res2.length
  let temp
  for (let i = 0; i<changes; i++) {
  if (!res.includes(res2[res2L-1])) {
  /*temp = res2[res2L-1]
  res2.pop()
  res2.unshift(temp)*/
  }

  }

  return res2.join(" ").trim()
}
console.log(spinWords("This is another test"))
