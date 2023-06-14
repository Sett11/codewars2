function findKey(ns,a=ns.map(e=>[...e+''])){
  return a[0].map((_,i)=>Object.entries(a.map(u=>u[i]).reduce((a,c)=>(a[c]=a[c]+1||1,a),{})).sort((a,b)=>a[1]-b[1])[0][0]).join``
}

console.log(findKey([153456,123406,124456,323456,123458,123756]))