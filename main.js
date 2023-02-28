biggest=(n,m=n.map(e=>e+'').sort((a,b)=>(b+a)-(a+b)).join``)=>m=='0000'?'0':m
  

console.log(biggest([3, 30, 34, 5, 9]))