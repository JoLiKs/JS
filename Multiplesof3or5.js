//CodeWars 6 kyu
function solution(number) {
    let nums = []
for (let i = 1; i<number; i++) {
    if (i%5 == 0 || i%3 == 0) nums.push(i)
}
let res = 0
for (let i = 0; i < nums.length; i++) {
    res+=nums[i]
}
  return res
}
