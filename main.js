function numberOfPairs(g){
  g=g.slice().sort(),arr=[]
  for(let i=0;i<g.length;i++){
    if(g[i]===g[i+1]){
      for(let j=i;j<g.length;j++){
        if(g[j+1]!==g[i]){
          arr.push(g.slice(i,j+1))
          i=j
          break
        }
      }
    }
  }return arr.map(e=>Math.floor(e.length/2)).reduce((a,c)=>a+c,0)
}
console.log(numberOfPairs([
  'Teal',   'Green',   'Aqua',   'Purple', 'Olive',
  'Teal',   'Navy',    'Navy',   'Gray',   'Navy',
  'White',  'Maroon',  'Lime',   'Silver', 'Purple',
  'Gray',   'Green',   'Olive',  'Lime',   'Lime',
  'Aqua',   'White',   'Purple', 'Black',  'Yellow',
  'Maroon', 'Fuchsia', 'Black',  'Yellow', 'Maroon',
  'Silver', 'Lime',    'Gray',   'Lime',   'Maroon',
  'Gray',   'Yellow',  'Purple', 'Black',  'Fuchsia',
  'Purple', 'Navy',    'Red',    'Navy',   'Purple',
  'Silver', 'Green',   'Gray',   'Silver', 'Olive',
  'Gray',   'White',   'Navy',   'Lime',   'Gray',
  'Gray',   'Black',   'Teal',   'White',  'Teal',
  'Lime'
]))
console.log(numberOfPairs([ 'Blue', 'Gray', 'Green', 'Aqua', 'Red', 'Black' ]))