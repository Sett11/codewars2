function isOre(n){
    let c=1,a=[]
    while(c<=n){
        if(n%c===0)a.push(c)
        c++
    }let res=Math.round(a.length/a.reduce((a,c)=>a+1/c,0)*1000)/1000
    return parseInt(res)===res
}
  console.log(isOre(10))
  console.log(isOre(8190))