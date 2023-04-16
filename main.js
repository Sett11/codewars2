function longestMotif(s,a=[]){
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<s.length;j++){
            let t=s.slice(i,j)
            if(s.slice(j).match(t)){
                a.push(t)
            }
        }
    }
    return [...new Set(a.filter(e=>e.length===Math.max(...a.map(u=>u.length))))]
}

console.log(longestMotif('CGGGTGGAGTCCGTCCCATGAAAGAGACGGTATAGCAAGCGCAACGAAGCGCGATATAATCCTTTTTCTTCCTTTTC'))