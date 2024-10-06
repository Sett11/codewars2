class ParkingLot {
  constructor(size) {
    this.a=Array(size).fill(0)
    this.bikes=new Set()
    this.cars=new Set()
    this.vans=new Set()
  }
  park(s){
    if(s instanceof Bike){
      if(this.size<1)return false
      for(let i=-1;++i<this.a.length;){
        if(this.a[i]===0){
          this.a[i]=s.license
          this.bikes.add(s.license)
          return true
        }
      }
    }
    if(s instanceof Car){
      for(let i=-1;++i<this.a.length;){
        if(this.a[i]===0&&this.a[i+1]===0){
          this.a[i]=this.a[i+1]=s.license
          this.cars.add(s.license)
          return true
        }
      }
    }
    if(s instanceof Van){
      for(let i=-1;++i<this.a.length;){
        if(this.a[i]===0&&this.a[i+1]===0&&this.a[i+2]===0){
          this.a[i]=this.a[i+1]=this.a[i+2]=s.license
          this.vans.add(s.license)
          return true
        }
      }
    }
    return false
  }
  retrieve(s){
    if(this.bikes.has(s)){
      for(let i=-1;++i<this.a.length;){
        if(this.a[i]===s){
          this.a[i]=0
          this.bikes.delete(s)
          return true
        }
      }
    }
    if(this.cars.has(s)){
      for(let i=-1;++i<this.a.length;){
        if(this.a[i]===s&&this.a[i+1]===s){
          this.a[i]=this.a[i+1]=0
          this.cars.delete(s)
          return true
        }
      }
    }
    if(this.vans.has(s)){
      for(let i=-1;++i<this.a.length;){
        if(this.a[i]===s&&this.a[i+1]===s&&this.a[i+2]===s){
          this.a[i]=this.a[i+1]=this.a[i+2]=0
          this.vans.delete(s)
          return true
        }
      }
    }
    return false
  }
}

class Bike{
  constructor(license){
    this.license=license
  }
}

class Car{
  constructor(license){
    this.license=license
  }
}
class Van{
  constructor(license){
    this.license=license
  }
}

p=new ParkingLot(6)

console.log(p.park(new Van('B1')))
console.log(p.retrieve('B1'))