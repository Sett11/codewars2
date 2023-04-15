Number.prototype.times=function(f){
    if(!f)throw Error()
    let n=Math.round(+JSON.stringify(this))
    for(let i=0;i<n;i++)f()
}

console.log((10).times(function() {
    console.log('hello');
  }))