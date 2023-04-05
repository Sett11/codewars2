sortTwisted37=a=>a.map(e=>+[...e+''].map(u=>u==7?3:u==3?7:u).join``).sort((a,b)=>a-b).map(e=>+[...e+''].map(u=>u==7?3:u==3?7:u).join``)

console.log(sortTwisted37([1,2,3,4,5,6,7,8,9]))