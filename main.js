function extractIds(d){
    return JSON.stringify(d).replace(/\d/g,' $& ').replace(/[^\d ]/g,'').split` `.filter(e=>e).map(Number)
  }

  console.log(extractIds({
    id : 1,
    items : [{
      id : 2,
      items : [{
          id : 3,
          items : [
          {id : 4},
          {id : 5}
          ]
        },{
          id : 6,
          items : [{id : 7}]
        }]
      }]
  }))