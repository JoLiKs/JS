//CodeWars 6 kuy Done!
function findOutlier(integers){
  let even = integers.filter(int => int%2 == 0)
  let odd = integers.filter(int => int%2 != 0) 
  return even.length<odd.length ? parseInt(even):parseInt(odd)
}
