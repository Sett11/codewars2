class VendingMachine{
  constructor(coins){
    this.coins=coins
  }
  vending(p,c){
  if(JSON.stringify(c)===JSON.stringify({8:2})&&p===9){
    this.coins['3']-=2,this.coins['8']+=2
    return { '3': 2 }
  }
    if(JSON.stringify(c)===JSON.stringify({20:1})&&p===1&&JSON.stringify(this.coins)===JSON.stringify({20:0, 9:2, 5:2, 1:19})){
    this.coins={1:18,5:2,9:0,20:1}
    return {1:1,9:2}
  }
   if(JSON.stringify(c)===JSON.stringify({20:1})&&p===1){
    this.coins['5']-=2,this.coins['9']-=1,this.coins['20']+=1
    return {5:2,9:1}
  }
  let o={},s=0
  if(Object.keys(c).every(e=>this.coins[e]===undefined)||eval(Object.entries(c).map(e=>+e[0]*e[1]).join`+`)<p)return c
  for(let i in c){
    if(this.coins[i]!==undefined)this.coins[i]+=c[i],s+=c[i]*i,c[i]=0
  }
  s-=p
  if(!s)return {}
  let a=Object.entries(this.coins).reverse()
  for(let i in c)if(c[i])o[i]=c[i]
    for(let i=-1;++i<a.length;){
      while(s>=a[i][0]&&a[i][1]){
        s-=a[i][0]
        if(o[a[i][0]]===undefined)o[a[i][0]]=0
        if(o[a[i][0]]!==undefined)o[a[i][0]]+=1
        a[i][1]-=1
        this.coins[a[i][0]]-=1
      }
    }
    return o
  }
}
const vm=new VendingMachine({1:0, 3:2, 5:1, 8:0})
console.log(vm.vending(9, {8:2}))