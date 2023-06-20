const manCave=a=>{
  return a.some(e=>e.name==='Raj')?a.filter(e=>e.gender==='male').map(e=>{e.status='Single';return e}):a
}


let Member = function(name,gender,status= "In a relationship"){
  this.name = name;
  this.gender=gender;
  this.status=status;
}

let squad = [new Member("Leonard","male","Married"),
  new Member("Penny", "female","Married"),
  new Member("Howard","male","Married"),
  new Member("Bernadette", "female","Married"),
  new Member("Sheldon","male","In a relationship"),
  new Member("Amy","female","In a relationship"),
  new Member("Raj","male","Single")]

console.log(manCave(squad))