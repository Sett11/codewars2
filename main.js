function hallOfFame(a){
  const f=x=>x.filter(e=>typeof e==='string').length
 a.sort((a,b)=>b[1]-a[1])
 for(let i=0;i<a.length-1;i++){
  if(a[i][1]===a[i+1][1]){
    a[i].push(a[i+1][0]);a.splice(i+1,1);i--
  }
 }
 a=a.map(e=>e.filter(u=>typeof u==='number').concat(e.filter(u=>typeof u==='string').sort()))
 a.length=3
 if(f(a[0])===1&&f(a[1])>1)a[2]=[]
 if(f(a[0])>1){
  a[2]=a[1];a[1]=[]
 }
 if(f(a[0])>2){
  a[1]=[];a[2]=[]
 }
 while(a.length<3)a.push([])
 return a
}

console.log(hallOfFame( [["Aya",500], ["Ben",400], ["Clo",300], ["Dan",200], ["Eva",100]]))
console.log(hallOfFame( [["Aya",500], ["Ben",400], ["Clo",300], ["Dan",300], ["Eva",100]]))
console.log(hallOfFame( [["Aya",500], ["Ben",400], ["Clo",400], ["Dan",300], ["Eva",100]]))
console.log(hallOfFame( [["Aya",500], ["Ben",500], ["Clo",400], ["Dan",300], ["Eva",100]]))
console.log(hallOfFame( [["Aya",500], ["Ben",500], ["Clo",500], ["Dan",300], ["Eva",100]]))