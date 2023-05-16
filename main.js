function lengthOfRailway(s,c=0,v=0){
  s=s.replace(/呜呜呜|哐当/g,' $& ').split` `.filter(e=>e==='哐当'||e==='呜呜呜')
  for(let i=0;i<s.length;i++){
    if(s[i]==='呜呜呜')v+=1
    if(s[i]==='哐当')c+=v%2==0?10:20
  }
  return c
}

console.log(lengthOfRailway("呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"))
console.log(lengthOfRailway("呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当呜呜呜哐当哐当哐当哐当哐当"))
console.log(lengthOfRailway("呜呜呜哐当哐当面包饮料矿泉水了啊，哐当桶面火腿肠茶叶蛋了啊哐当哐当呜呜呜哐当哐当哐当北京站到了，下车的旅客请带好您的行李，准备下车哐当哐当"))