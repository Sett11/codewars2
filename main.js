class VendingMachine{
  constructor(a,b){
    this.a=a
    this.b=b
  }
  vend(s,i){
    let c=this.a.map((e,i)=>[e,i]).filter(e=>e[0].code.toLowerCase()===s.toLowerCase())[0]
    if(!c)return `Invalid selection! : Money in vending machine = ${(this.b).toFixed(2)}`
    if(c[0].price>i)return "Not enough money!"
    if(!c[0].quantity)return `${c[0].name}: Out of stock!`
    if(i===c[0].price){
      this.b=+(this.b+ +i).toFixed(2)
      this.a[c[1]].quantity-=1
      return `Vending ${c[0].name}`
    }
    if(i>c[0].price){
      this.b=+(this.b+ +i).toFixed(2)
      let t=(i-c[0].price).toFixed(2)
      this.b=+(this.b- +t).toFixed(2)
      this.a[c[1]].quantity-=1
      return `Vending ${c[0].name} with ${t} change.`
    }
  }
}
const r=new VendingMachine([{name:"Smarties", code:"A01", quantity:10, price:0.60},
{name:"Caramac Bar", code:"A02", quantity:5, price:0.60},
{name:"Dairy Milk", code:"A03", quantity:1, price:0.65},
{name:"Freddo", code:"A04", quantity:1, price:0.25}],10.00)

console.log(r.vend("A01",0.60))
console.log(r.vend("A01",10.0))
console.log(r.vend("Z01",0.41))
console.log(r.vend("A02",0.40))
console.log(r.vend("B06",4.60))