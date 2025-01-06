Array.prototype.sort=function(){
    let n=this.length,a=this
    for(let i=-1;++i<n;)for(let j=i;++j<n;)if(a[i]>a[j])[a[i],a[j]]=[a[j],a[i]]
    return a
}


console.log([9,7,2,4,5,3,6,8,1].sort())