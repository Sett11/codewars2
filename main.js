function wordSearch(w,q){
    let n=q.length,sq=n**.5,a=[],r=[],val=false
    for(let i=0;i<n;i+=sq)a.push(q.slice(i,i+sq))
    const f=(i,j,s,k,z,v,dir)=>{
     x=z.join``
     if(x===s){
        r.push(v.map(u=>[String.fromCharCode(u[1]+65),u[0]+1].join``))
        val=true
        return
     }
     if(val||i<0||i>=sq||j<0||j>=sq||k>=s.length||a[i][j]!==s[k])return
        z.push(s[k])
        v.push([i,j])
        k+=1
        if(dir==='i')f(i+1,j,s,k,z,v,dir)
        if(dir==='ij')f(i+1,j+1,s,k,z,v,dir)
        if(dir==='j')f(i,j+1,s,k,z,v,dir)
   }
   for(let k=-1;++k<w.length;){
     for(let i=-1;++i<sq;){
        for(let j=-1;++j<sq;){
            if(a[i][j]===w[k][0]){
                f(i,j,w[k],0,[],[],'i')
                f(i,j,w[k],0,[],[],'j')
                f(i,j,w[k],0,[],[],'ij')
                if(val)break
            }
        }
        if(val)break
     }
     if(!val)r.push(['Word not found.'])
     else val=false
   }
   return r
}

console.log(wordSearch([ 'CKPRGQXHJVTJPJMB', 'MVLCVGCCY' ], 'NOMOMSSRRQEALTHSXDCPENLBGHXFEBYMMVPMYOJOMSGHDZEOZHKJPRPVZJICOYCAZXRQIPVMUNIADOCVIDVRKYMHVQDRCJINTCEKUSIMQJCINFKBQEXQAYIOPIMVLCVGCCYVWGXPNJUBRRPDSWPMHGMSEMFYVWNXUYGHGBBLFJFIBZEVQKLYETXQJUWMBLRIWXDTAODHPBSOXXZHUSYKHPTHBCHJKEPUIHROZGZHBDPVMCRSBNLQJFJQYXJXDAVCYQCPYQNZADNVNBEXQDRUNYPWHBTKLDMGTTWCNKGXDQGGOEAWVNLBBJPCODRMJQXOZAJNQASCGBPLELGUWWJTWWBUYKFOVIEJXHIMDHFKVBEZZJMPFWGIMPXISRIACCYBZVDKCFZKYBKNITNQ'))
console.log(wordSearch(['HELLO', 'WORLD'], 'FHKEFFHDFEOGIOPVFLDKOIAQFLWIHQRMUOTOXNRIAAESRUOFCUHHELTUFJJSNJDO'))
console.log(wordSearch([ 'KATAS', 'CODE', 'WARS' ],'KESTSCWARSNOSFTYADTESASEDWSFSWSFDYAW'))
console.log(wordSearch([ 'EMPTY', 'PUZZLE' ],'TESTSIDWSFNWSFDYAWTESTSIDWSFNWSFDYAW'))