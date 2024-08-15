const inB={'B':n=>n,'KB':n=>n/1024,'MB':n=>n/1048576,'GB':n=>n/1073741824,'TB':n=>n/1099511627776}
const to_B={'B':n=>n,'KB':n=>n*1024,'MB':n=>n*1048576,'GB':n=>n*1073741824,'TB':n=>n*1099511627776}

class Converter {
    constructor(n,unit){
      this.n=n
      this.unit=unit
    }
    get size(){return `${this.n} ${this.unit}`}
    toB=()=>{this.n=+to_B[this.unit](this.n);this.unit='B'}
    toKB=()=>{this.n=Math.floor(inB['KB'](to_B[this.unit](this.n))*1000)/1000;this.unit='KB'}
    toMB=()=>{this.n=Math.floor(inB['MB'](to_B[this.unit](this.n))*1000)/1000;this.unit='MB'}
    toGB=()=>{this.n=Math.floor(inB['GB'](to_B[this.unit](this.n))*1000)/1000;this.unit='GB'}
    toTB=()=>{this.n=Math.floor(inB['TB'](to_B[this.unit](this.n))*1000)/1000;this.unit='TB'}
  }

const file=new Converter(1099511627776, "B")
file.toKB()
console.log(file.size)
file.toMB()
console.log(file.size)