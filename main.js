class Cuboid {
    constructor(length, width, height){
        this.length = length
        this.width = width
        this.height = height
    }
   get surfaceArea(){
        return 2 *(this.length*this.height + this.height*this.width + this.length*this.width)
    }
   get volume(){
        return this.length * this.width * this.height
    }
  }
  class Cube extends Cuboid {
    constructor(length){
        super(length,length,length)
    }
  }

const r = new Cuboid(1,2,3)
r.length = 4

const c = new Cube(1)

console.log(r.surfaceArea)