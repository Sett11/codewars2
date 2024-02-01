GCDMeansGreatestCommonDivisorOrHighestCommonFactor=x=(a,b)=>!b?a:x(b,a%b)

console.log(GCDMeansGreatestCommonDivisorOrHighestCommonFactor(15,18))