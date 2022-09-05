//CodeWars 5 kyu
function generateHashtag(str) {
    let res = []
    str = str.trim()
    if (str == "" || str == " ") return false
for (let i = 0; i < str.length; i++) {
    if (/\s/g.test(str[i])) {
        if (str[i+1] == " ") {
            str[i] = str[i].trim()
        }
        else {
        res.push(str[i+1].toUpperCase());
        i++;
        }
    }
    else res.push(str[i])
   
}
res[0] = res[0].toUpperCase()
if (res.length<1) return false
 res = "#"+res.join('')
    if (res.length >140) return false
      return res
      
}
