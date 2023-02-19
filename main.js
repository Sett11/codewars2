function paginate(a) {
    a=a.slice().sort((a,b)=>a-b)
    for(let i=0;i<a.length;i++){
        if(a[i+1]-a[i]===1){
            for(let j=i;j<a.length;j++){
                if(a[j+1]-a[j]!==1){
                    a=a.slice(0,i).concat([a.slice(i,j+1)].concat(a.slice(j+1)))
                    break
                }
            }
        }
    }return a.map(e=>typeof e==='object'?[e[0],'-',e[e.length-1]]:e).flat().join`,`.replace(/,-,/g,'-').replace(/,/g,', ')
}
console.log(paginate([10,12,13,14,15,16,17,20,22,23,27]))