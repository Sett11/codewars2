function getKyu(a,h){
  a.push(h)
  a.sort((a,b)=>a-b)
  one=[a.shift()]
  two=[a.shift(),a.shift()]
  three=[a.shift(),a.shift()]
  four=[a.shift(),a.shift(),a.shift()]
  five=[a.shift(),a.shift(),a.shift()]
  six=[a.shift(),a.shift(),a.shift()]
  seven=[a.shift(),a.shift(),a.shift(),a.shift()]
  eight=[a.shift(),a.shift(),a.shift(),a.shift()]
  r=[one,two,three,four,five,six,seven,eight]
  for(let i=0;i<r.length;i++)if(r[i].includes(h))return i+1
  return 0
}

console.log(getKyu([1,7,2,3,4,5], 1))