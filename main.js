middleMe=(n,x,y)=>n%2!==0?x:y.repeat(n/2)+x+y.repeat(n/2)


console.log(middleMe(10,'*','#'))