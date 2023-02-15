function compare(a,b){
    if(a.match(/\-/g)&&b.match(/\-/g))return parseFloat(a)>parseFloat(b)?'greater':parseFloat(a)<parseFloat(b)?'less':'equal'
    console.log(a,b)
    if(a.length<b.length&&b.match(/\./g)&&a.match(/\./g))a=a+'0'.repeat(b.length-a.length)
    if(a.length<b.length&&b.match(/\./g))a=a+'.'+'0'.repeat(b.length-a.length-1)
    if(a.length<b.length)a='0'.repeat(b.length-a.length)+a
    if(a.length>b.length&&a.match(/\./g)&&b.match(/\./g))b=b+'0'.repeat(a.length-b.length)
    if(a.length>b.length&&a.match(/\./g))b=b+'.'+'0'.repeat(a.length-b.length-1)
    if(a.length>b.length)b='0'.repeat(a.length-b.length)+b
	for(let i = 0; i < Math.max(a.length,b.length); i++){
        if(a[i]<b[i])return 'less'
        if(a[i]>b[i])return 'greater'
    }return 'equal'
}
console.log(compare("2.40","2.4"))