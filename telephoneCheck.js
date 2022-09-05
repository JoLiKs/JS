//freeCodecamp, USA format
function telephoneCheck(str) {
  str = str.trim()
  let number = parseInt(str.replace(/[^\d\.]/g, ""), 10)
  if (str[0] == 0 || str.includes("?")) return false;
  if (str[0] == "(" && str[4] != ")" || str[str.length] == ")") return false;
  if (str.includes(")") && !str.includes("(")) return false;
  let str2 = ""+number
  if (str.length > 16 || str.length < 10) return false;

  if (str2.length > 11 || str2.length < 10) {
    return false
  }
 if (str2.length > 10 && str[0] != 1) return false;
 let hyphens = 0;
  for(let i = 0; i<str.length; i++) {
if (str[i] == "-") hyphens++;
  }
  if (hyphens > 2) return false;
  return true;
}

