function restFood(a,x,r=x.slice()){
  for(let i=-1;++i<a.length;){
    if(a[i]==='German team offense'){
      let t=['Beer','Nut','Nut','Nut'],c=r.slice()
      while(t.length){
        let j=c.indexOf(t.shift())
        if(j===-1)return r
        c.splice(j,1)
      }
      r=c
    }
    if(a[i]==='German team scored'){
      let t=['Beer','Meat','Meat'],c=r.slice()
      while(t.length){
        let j=c.indexOf(t.shift())
        if(j===-1)return r
        c.splice(j,1)
      }
      r=c
    }
    if(a[i]==='Brazil team scored'){
      let t=['Nut','Nut','Nut','Nut','Nut'],c=r.slice()
      while(t.length){
        let j=c.indexOf(t.shift())
        if(j===-1)return r
        c.splice(j,1)
      }
      r=c
    }
  }
  return r
}
console.log(restFood([
  "German team offense",
  "German team scored",
  "Brazil team scored",
  "German team scored",
  "German team scored",
  "German team scored"
  ],[
"Beer","Nut","Nut","Nut","Meat","Nut",
"Nut","Nut","Beer","Nut","Meat","Beer",
"Nut","Meat","Beer","Nut","Meat"]))