function findGatecrashers(p,z,v=(JSON.stringify(z).match(/\d+/g)||[]).map(Number)){
    return p.filter(e=>!v.includes(e)).sort((a,b)=>a-b)
}
  
  console.log(findGatecrashers([0,1,2,3,4],[{ 'member' : 0, 'guests': [1,2]}, {'member' : 2, 'guests': [3]} ]))