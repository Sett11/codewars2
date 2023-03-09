function hamming(a,b,c=0) {
	[...a].forEach((e,i)=>{if(e!==b[i])c++})
    return c
}

console.log(hamming("espresso","espresso"))