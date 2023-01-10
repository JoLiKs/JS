function arraySqrtSum(a) {
return a.filter(i => i%2 == 0).reduceRight((a, i) => a+Math.pow(i, 2), 0)
}
console.log(arraySqrtSum([1, 2, 3, 4, 5, 6]))
