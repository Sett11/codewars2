function solve(str){
    const arr=[]
    str=str.split``.map((e,i)=>e===' '?arr.push(i):e).filter(e=>typeof e==='string').reverse().join``
    for(let i = 0; i < arr.length; i++){
        str=str.slice(0,arr[i]) + ' ' + str.slice(arr[i])
    }return str
 }
console.log(solve("codewars"))