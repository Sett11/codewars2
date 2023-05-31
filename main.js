Array.prototype.groupBy=function groupBy(f=e=>e){
    let a=this.map(e=>[f(e),e]).sort((a,b)=>a[0]-b[0]),r=[],o={}
    for(let i=-1;++i<a.length;)if(a[i][0]!==(a[i+1]||[])[0])r.push(a.slice(0,i+1)),a=a.slice(i+1),i=-1
    r.forEach(e=>o[e[0][0]]=e.map(u=>u[1]))
    return o
}

console.log([1,2,3,2,4,1,5,1,6].groupBy())
console.log([1,2,3,2,4,1,5,1,6].groupBy(function(val) { return val % 3;} ))