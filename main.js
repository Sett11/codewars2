function hasTwoCubeSums(n,i=1,a=[],c=0){
    while(i**3<n)a.push(i**3),i++
    for(let i=-1;++i<a.length;)for(let j=-1;++j<a.length;)if(n-a[i]===a[j])c++
    return c>2
}
console.log(hasTwoCubeSums(1729))