
sc=s=>(s.match(/\-\+/g)||[]).length*5+(s.length*2)-1+(s.match(/\+\-/g)||[]).length*5

  console.log(sc("-+-+-+"))
  console.log(sc("---+++"))
  console.log(sc("-+-+-----------"))
  console.log(sc("-+-+-++++++++++"))

