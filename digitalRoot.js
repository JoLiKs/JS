//CodeWars 6 kui done!
function digitalRoot(n) {
  n = ""+n
let res = 0
for(let i = 0; i<n.length; i++) {
	res+=parseInt(n[i])
}
if (res > 9) return digitalRoot(res)
  return res
}
