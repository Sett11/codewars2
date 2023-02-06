const maxMirror = a => {
    if([...new Set(a)].length===a.length)return 0
    if(a.join``===a.slice().reverse().join``&&a.length!==1)return a.length
    let arr=[]
    a.push('&')
        for(let i = 0; i < a.length; i++){
         for(let j = i+1; j < a.length; j++){
            if(a.slice(i,j).join``===a.slice(i,j).reverse().join``){
                arr.push(a.slice(i,j))
            }else{
                for(let z = j, v = j+a.slice(i,j).length; z<a.length,v<a.length; z++,v++){
                    if(a.slice(i,j).reverse().join``===a.slice(z,v).join``){
                        arr.push(a.slice(z,v))
                    }
                }
            }
         }
     }
     const res = Math.max(...arr.map(el=>el.length))
     return res===1?0:res
 }
  console.log(maxMirror([1, 2, 2]))
  console.log(maxMirror([1, 2, 3, 8, 9, 3, 2, 1, 9, 8]))
  console.log(maxMirror([1,10,2,9]))
  console.log(maxMirror([6,1,1,10,9,10,5,4,5,2,1,7,6,3,4,8,1,7]))
  console.log(maxMirror([1,6,4,3,4,3,6,4,8,6,10,7,10,9,7,2,3]))
  console.log(maxMirror([1,7,10,4,5,9,7,5]))
  console.log(maxMirror([8,6,9,1,9,1,7,10,3,1,1,6,1,10,4,8]))