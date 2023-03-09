function hammingDistance(z,v,a=(z).toString(2),b=(v).toString(2),c=0) {
    if(a.length<b.length)a='0'.repeat(b.length-a.length)+a
    if(b.length<a.length)b='0'.repeat(a.length-b.length)+b;
	[...a].forEach((e,i)=>{if(e!==b[i])c++})
    return c
}

console.log(hammingDistance(34013, 702))