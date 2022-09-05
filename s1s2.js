//CodeWars 4 kuy
function mix(s1, s2) {
    let max = []
    s1 = s1.replace(/(^[^ ]* )|[ ]+/g, '$1');
    for (let i = 0; i<s1.length; i++) {
        let count = 0;
        for (let j = 0; j<s1.length; j++) {
        
        if (s1[i] == s1[j]) count++; 
    }
   if (count > 1 && !max.includes(s1[i])) {
       max.push(s1[i], count)
       count = 1;
   }
    }
    let tempMax = ["no", 0]
    //попробовать сравнивать с наименьшим
    for (let i = 0; i<max.length; i+=2) {
        if (max[i+1]>tempMax[1]) {
            tempMax.unshift(max[i], max[i+1])
        }
        else tempMax.push(max[i], max[i+1])
    }
    
    let max2 = []
    s2 = s2.replace(/(^[^ ]* )|[ ]+/g, '$1');
    for (let i = 0; i<s2.length; i++) {
        let count = 0;
        for (let j = 0; j<s2.length; j++) {
        
        if (s2[i] == s2[j]) count++; 
    }
   if (count > 1 && !max2.includes(s1[i])) {
       max2.push(s1[i], count)
       count = 1;
   }
    }
  let tempMax2 = ["no", 0]
    for (let i = 0; i<max2.length; i+=2) {
        if (max2[i+1]>tempMax2[1]) {
            tempMax2.unshift(max2[i], max2[i+1])
        }
    }
    
    tempMax2.pop()
    tempMax2.pop()
    let res = ["no", 0]
    let obj = {
        
    }
    for(let gi = 0; gi < tempMax.length+tempMax2.length; gi++) {
    for(let i = 0; i < tempMax.length; i+=2) {
        if (tempMax[i+1]>res[1]) {
        res.unshift(tempMax[i], tempMax[i+1])
        obj[tempMax[i]] = tempMax[i+1]
        //tempMax.shift()
        }
    }
    for(let i = 0; i < tempMax2.length; i+=2) {
        if (tempMax2[i+1]>res[1]) {
        res.unshift(tempMax2[i], tempMax2[i+1])
        obj[tempMax2[i]] = tempMax2[i+1]
        //tempMax2.shift()
        }
    }
    }
    //JSON.stringify(obj);
  return tempMax
}
/*
for(let j = 0; j<tempMax[i+1]; j++) {
        res.unshift(tempMax[i], tempMax[i+1])
        obj[tempMax[i]] = tempMax[i+1]
        }
*/
s1 = "my&friend&Paul has heavy hats! &"
s2 = "my friend John has many many friends &"
//"2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"
console.log(mix(s1, s2))

