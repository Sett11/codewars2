function minPermutation(n) {
  let newN=n,d=''
  if(newN<0){
    newN=Math.abs(newN)
    d='-'
  }
  let res=[...newN+''].sort((a,b)=>(a+b)-(b+a)).join``
  if(res[0]==='0'){
    for(let i=0;i<res.length;i++){
        if(res[i]!=='0'){
            res=res.charAt(i)+res.slice(0,i)+res.slice(i+1)
            break
        }
    }
  }
  return +(d+res)
}

console.log(minPermutation(29394))
console.log(minPermutation(-652050))