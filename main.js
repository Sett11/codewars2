commonGround=(s1,s2)=>[...new Set(s2.split` `.filter(e=>s1.split` `.includes(e)))].join` `||'death'

  console.log(commonGround("i like turtles", "what are you talking about"))