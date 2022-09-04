function sigRandom(min, max, x)
{
    let rnd;
    rnd = Math.round(Math.random()*max-min+1) 
    rnd = Math.round(1/(1+Math.pow(Math.E, -x))*rnd) //use sigmoid function
    if (rnd == 0) return sigRandom(min, max, rnd);
 return rnd;
}

for(let i = 0; i< 15; i++) console.log(sigRandom(1,10,999)) //test
