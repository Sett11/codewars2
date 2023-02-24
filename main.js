Ackermann = function(m,n) {
    if(m===0)return n+1
    if(n===0&&m>0)return Ackermann(m-1,1)
    if(m>0&&n>0)return Ackermann(m-1,Ackermann(m,n-1))
}
console.log(Ackermann(4,0))