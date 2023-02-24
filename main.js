function pattern(n){
    let center=[],arr=[],c=1,str=''
    while(arr.length<n){
        arr.push(' '.repeat(n-1)+c+'\n')
        c++
        if(c===10)c=0
    }arr=arr.concat(arr.slice(0,arr.length-1).reverse()),center=arr.slice().join``.replace(/[^0-9]/g,'')
    arr=arr.slice(0,Math.floor(arr.length/2)).concat([center+'\n']).concat(arr.slice(Math.ceil(arr.length/2))),str=arr.join``
    return str
}
console.log(pattern(3))