function shapeTimesObjectIntoIterableArray(t,a=[{}],c=0){
  if(!t)return []
  a[c].days=[],t=Object.entries(t)
  for(let i=0;i<t.length;i++){
    if(!t[i][1][0])continue
        if(!a[c].open){
        a[c].open=t[i][1][0].open
        a[c].close=t[i][1][0].close
        a[c].days.push(t[i][0])
      }
      if(a[c].open===t[i][1][0].open&&!a[c].days.includes(t[i][0])){
        a[c].days.push((t[i][0]))
      }
        if(t[i][1][0].open&&a[c].open!==t[i][1][0].open){
          a.push({}),c+=1,i-=1,a[c].days=[]
        }
      }
  return !a[c].days.length?[]:a.map(e=>{
    e=Object.entries(e)
    e.push(e.shift())
    const o={}
    e.forEach(u=>o[u[0]]=u[1])
    return o
  })
}

console.log(shapeTimesObjectIntoIterableArray({ monday: [ { open: '00:00', close: '23:00' } ],
tuesday: [ { open: '00:00', close: '23:00' } ],
wednesday: [],
thursday: [ { open: '01:00', close: '22:00' } ],
friday: [ { open: '01:00', close: '22:00' } ],
saturday: [],
sunday: [] }
))