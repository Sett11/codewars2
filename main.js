function area(d,l){
    return d<=l?  "Not a rectangle" : Number((Math.sqrt((d**2) - (l**2)) * l).toFixed(2))
}
console.log(area(12,5))