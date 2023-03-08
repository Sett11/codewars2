function makeChocolates(s,b,g) {
    console.log(s,b,g)
  if(2+(b*5)===g||2+5===g&&s&&b)return 1
  if((s*2)+(b*5)<g||b===0&&s%2===0&&g%2!==0||g<5&&g%2!==0)return -1
  if(g===b*5)return 0
  if(g<b*5){
      g%=5
      while(g%2!==0){
          g+=5
      }
      return g/2<=s?g/2:-1
  }
  if(g>b*5){
      g-=b*5
      while(g%2!==0){
          g+=5
      }
      return g/2<=s?g/2:-1
  }
  if(g>b*5){
      g-=(b*5)
      if(g%2!==0)return -1
  }
}
console.log(makeChocolates(3, 137, 241))