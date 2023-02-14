class CaesarCipher{
    constructor(n,smLett='abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',bgLett='ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'){
        this.n=n
        this.a=smLett
        this.b=bgLett
    }
        encode(s){
            return s.split``.map(e=>this.a.includes(e)?this.a[this.a.indexOf(e)+this.n]:this.b.includes(e)?this.b[this.b.indexOf(e)+this.n]:e).join``.toUpperCase()
        }
        decode(s){
            return s.split``.map(e=>this.a.includes(e)?this.a[this.a.lastIndexOf(e)-this.n]:this.b.includes(e)?this.b[this.b.lastIndexOf(e)-this.n]:e).join``.toUpperCase()
        }
  }
  console.log(new CaesarCipher(5).decode('BFKKQJX'))