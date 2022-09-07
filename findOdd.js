//CodeWars 6 kui Done!
function findOdd(a) { 
	let counts = {}
for(let i = 0; i<a.length; i++) {
	let c = 0
	for(let j = 0; j<a.length; j++) {
	if (a[i] == a[j]) {
		c++
		 counts[a[i]] = c
}
}
}
res = ""
for (const prop in counts) {
  if (counts[prop]%2 > 0) {
res = prop
}
  }
return parseInt(res)
}
