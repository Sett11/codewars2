function stairs(n){
    let str='',arr=[],c=1
    while(arr.length<n){
       if(c>9)c=0
       arr.push(c)
       str+=' '.repeat((n*4)-arr.length*4)+arr.join` `+' '+arr.slice().reverse().join` `+'\n'
       c++
    }return str.slice(0,str.length-1)
}
console.log(stairs(10))