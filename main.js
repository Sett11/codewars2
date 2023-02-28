function range(s=0,c,x=1) {
  console.log(s,c,x)
  if(s==c)return []
  let arr=[],y=!c?s:c
  for(let i=!c?0:s;i<y;i+=x){
    arr.push(i)
    if(arr.length==c-s)break
  }return arr
}

console.log(range(1,5,0))