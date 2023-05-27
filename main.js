const GIFTS={
  '1': 'Toy Soldier',
  '2': 'Wooden Train',
  '4': 'Hoop',
  '8': 'Chess Board',
  '16': 'Horse',
  '32': 'Teddy',
  '64': 'Lego',
  '128': 'Football',
  '256': 'Doll',
  '512': "Rubik's Cube"
}
function gifts(n,q=Object.keys(GIFTS).map(e=>+e).reverse(),a=[]){
  for(let i=-1;++i<q.length;)if(n>=q[i])n-=q[i],a.push(GIFTS[q[i]])
  return a.sort()
}

console.log(gifts(160))