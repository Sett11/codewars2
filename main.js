class HolidayPriorityQueue{
  constructor(){this.a=[]}
  addGift(g){
    return this.a.push(g)
  }
  buyGift(){
    return (this.a.splice(this.a.sort((a,b)=>a.priority-b.priority)[0],1)[0]||'').gift||''
  }
}
const r=new HolidayPriorityQueue()
r.addGift()
console.log(r.buyGift())