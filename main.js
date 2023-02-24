function pattern(n){
    let str='',arr=[],c=1
     while(arr.length<n){
        arr.push(c)
        c++
    if(c===10)c=0}
     for(let i=0;i<arr.length;i++){
        str+=' '.repeat((arr.length)-i-1)+arr.slice(0,i).join``+arr[i]+arr.slice(0,i).reverse().join``+' '.repeat(arr.length-i-1)+'\n'
     }return str.slice(0,str.length-1)
   }
   console.log(pattern(3))