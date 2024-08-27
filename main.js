diamondBurglar=a=>a.map(e=>e.replace(/(.)\1*/g,u=>u[0]==='.'?'':' '+Math.ceil(u.length/2)+' ').split` `).flat().reduce((a,c)=>a+ +c,0)

console.log(diamondBurglar(['.*...*...*', '..***..*..', '...**.*...', '.***.**..*']))