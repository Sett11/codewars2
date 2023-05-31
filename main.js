function survivors(n,a){
    return n.map((e,j)=>{
      if(e+a[j].reduce((a,c)=>a+c,0)<=a[j].length)return '&'
        let t=[]
        for(let i=-1;++i<a[j].length;){
            if(e<1)break
            e-=1,e+=a[j][i],t.push(a[j][i])
        }
        return t.length===a[j].length?j:'&'
    }).filter(e=>e!=='&')
}
console.log(survivors([3, 2, 1, 0],[[1, 0, 0], [0, 2, 0, 0], [0, 9], [8, 8]]))