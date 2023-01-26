function calculate1RM(w, r) {
    if (r == 0) return 0
  if (r == 1) return w
  let res1 = Math.round(w*(1+r/30))
  let res2 = Math.round(100*w/(101.3-2.67123*r))
  let res3 = Math.round(w*(Math.pow(r, 0.1)))
  if (res1 > res2 && res1 > res3) return res1
  if (res2 > res1 && res2 > res3) return res2
  if (res3 > res1 && res3 > res2) return res3
  else return res1
}
