function countZeros(n) {
    arr=[],c=n%2===0?2:1
    while(c<=n){arr.push(c);c+=2}
    const res=(arr.reduce((a,c)=>BigInt(a)*BigInt(c))+'').match(/0+$/g)
    return res?res[0].length:0
}
  console.log(countZeros(30))