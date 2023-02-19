Array.prototype.transpose = function(m=this) {
  if(!m||m.length===0)return []
  if(m.every(e=>e.length===0))return [[]]
      arr=[],c=1,res=[]
      for(let i=0;i<m[0].length;i++){for(let j=0;j<m.length;j++){arr.push(m[j][i])}}for(let i=0;i<arr.length;i+=m.length){res.push(arr.slice(i,i+m.length))}
      return res
}
console.log([ [ 1, 2, 3, 4, 5, 6 ] ].transpose())
console.log([
  [ 12, 1, 18, 'b', true, 'd', 9, 'e', 1, 14 ],
  [ 14, 10, 13, 14, 'b', 1, 3, 8, 10, 20 ],
  [ false, 'b', 2, 18, 'd', 'c', 'b', 11, 18, 14 ],
  [ 14, 'f', 14, true, 7, 10, 'd', 'd', 13, 'c' ],
  [ 3, 8, 1, 15, 7, 20, 20, 14, 19, 3 ],
  [ 4, 19, 'a', true, 19, true, 'a', 17, 'a', 6 ] ].transpose())
console.log([ [ 'd', 14, 7, 8, 2 ], [ 15, 10, 6, 15, 1 ] ].transpose())