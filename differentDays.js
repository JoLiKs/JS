//CodeWars 6 kuy DONE!
function countDays(d){
    let today = new Date().getTime()
    let dd = d.getTime()
    const day = 1000*60*60*24
    const diffMS = dd-today
    const diffD = Math.round(diffMS/day)
    if (diffD == 0) return "Today is the day!"
    if (dd < today) return "The day is in the past!"
    return diffD+" days"

}
