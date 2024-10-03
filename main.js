class Hex{
    constructor(v){this.v=v}
    static parse(s){return parseInt(s,16)}
    valueOf(){return this.v}
    toString(){return '0x'+((this.v).toString(16)).toUpperCase()}
    toJSON(){return this.toString()}
    plus(x){return new Hex(this.v+x)}
    minus(x){return new Hex(this.v-x)}
  }

F=new Hex(255)
console.log(F+0)