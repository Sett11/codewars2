class Student {
    constructor(name, fives, tens, twenties) {
      this.name = name;
      this.fives = fives;
      this.tens = tens;
      this.twenties = twenties;
    }
  }
  const andy = new Student("Andy", 0, 0, 2);
  const stephen = new Student("Stephen", 0, 4, 0);
  const eric = new Student("Eric", 8, 1, 0);
  const david = new Student("David", 2, 0, 1);
  const phil = new Student("Phil", 0, 2, 1);
  const cam = new Student("Cameron", 2, 2, 0);
  const geoff = new Student("Geoff", 0, 3, 0);


function mostMoney(s) {
    const res=Object.entries(s).map(e=>Object.entries(e[1]).flat().map(u=>u==='fives'?5:u==='tens'?10:u==='twenties'?20:u)).map(e=>[e[1],[e[2],e[3]],[e[4],e[5]],[e[6],e[7]]]).map(z=>z.map(e=>typeof e==='string'?e:e.reduce((a,c)=>a*c))).map(e=>[e[0],[e[1],e[2],e[3]].reduce((a,c)=>a+c,0)]).sort((a,b)=>b[1]-a[1])
    return res.every((e,i,v)=>e[1]===v[0][1])&&res.length!==1?'all':res[0][0]
}

  console.log(mostMoney([andy, stephen, eric, david, phil]))