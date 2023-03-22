function getting_mad(a,b=[]){
if(a.some(e=>a.indexOf(e)!==a.lastIndexOf(e)))return 0
   for(let i=0;i<a.length;i++){
    for(let j=i+1;j<a.length;j++){
        b.push(Math.abs(a[i]-a[j]))
    }
   }
    return Math.min(...b.filter(e=>e&&e>0))
}

console.log(getting_mad( [-570, 542]))