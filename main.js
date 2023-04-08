function presentationAgenda(a,r=[]){
    for(let i=0;i<a.length;i++){
        for(let j=i+1;j<a.length;j++){
            for(let z=0;z<Math.max(a[i].dest.length,a[j].dest.length);z++){
                if(a[i].dest.includes(a[j].dest[z]))r.push(a[j].dest[z])
            }
        }
    }
    return a.map(e=>{
        e.dest=e.dest.map(u=>r.includes(u)?0:u).filter(z=>z)
        return e
    }).filter(e=>e.dest.length)
}
  console.log(presentationAgenda([ {'person': 'John', 'dest': ['Ahmedabad', 'Baghdad', 'Delhi', 'Dhaka']},
  {'person': 'Mickeal Angelo', 'dest': ['Ahmedabad', 'Baghdad', 'Delhi', 'Hong Kong', 'Istanbul', 'Jakarta', 'Mumbai', 'Santiago', 'Singapore']},
  {'person': 'Gandalf', 'dest': ['Chennai', 'Hong Kong']}
]))