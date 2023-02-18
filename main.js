mineLocation=f=>f.map((e,i)=>e.map((u,z)=>u===1?[i,z]:0).filter(a=>a!==0)).filter(e=>e.length!==0)[0][0]
  console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]))