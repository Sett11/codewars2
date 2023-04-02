const finalDestination=(c,d)=>{
  const a=[
    ["Deepwood Motte", "Shadow Tower", "Castle Black", "Eastwatch", "Bay of Seals"],
    [ "The Stony Shore", "Torrhen's Square", "Winterfell", "The Dreadfort", "Karhold"],
    [ "Flint's Finger", "Barrowtown", "Moat Cailin", "White Harbour", "Widow's Wat"],
    [ "Pyke", "Seagard", "The Twins", "Sisterton", "The Fingers"],
    [ "The Crag", "Riverrun", "Darry", "The Eyrie", "Gulltown"],
    [ "Castamere", "Acorn Hall", "Harrenhal", "Maidenpool", "Dragonstone"],
    [ "Lannisport", "Stoney Sept", "King's Landing", "Blackwater Bay", "Sharp Point"],
    [ "High Garden", "Bitterbridge", "King's Wood", "Storm's End", "Evenfall"],
    [ "Old Town", "Horn Hill", "Prince's Pass", "Planky Town", "Sunspear"]
  ],r=d.split` `.map(e=>[e[0],+e[1]]),z=a.map((e,i)=>e.map((u,j)=>u===c?[i,j]:0).filter(e=>e)).filter(e=>e.length).flat(2)
  for(let i=0;i<r.length;i++){
    if(z[0]<0)return "The Wall blocks your way"
    if(z[0]>a.length-1||z[1]<0||z[1]>a[0].length-1)return "You do not have a ship to cross this sea."
    if(r[i][0]==='S')z[0]+=r[i][1]
    if(r[i][0]==='N')z[0]-=r[i][1]
    if(r[i][0]==='W')z[1]-=r[i][1]
    if(r[i][0]==='E')z[1]+=r[i][1]
  }
  return z[0]<0?"The Wall blocks your way":z[0]>a.length-1||z[1]<0||z[1]>a[0].length-1?"You do not have a ship to cross this sea.":a[z[0]][z[1]]
}
console.log(finalDestination("King's Landing", "N7"))