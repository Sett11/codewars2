class Archiver{
    constructor(){this.a=[]}
    set temperature(x){
        let o={date:new Date(),val:x}
        this.a.push(o)
    }
    get temperature(){
        return this.a[this.a.length-1].val
    }
    getArchive(){
      return this.a
    }
  }
  const arc = new Archiver()
  arc.temperature=33
  arc.temperature=23
  console.log(arc.getArchive())
  console.log(arc.temperature)