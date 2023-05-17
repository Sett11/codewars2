function solve(a,c=0,s=0){
  a=a.sort((a,b)=>b-a)
    while(s!==a[0]){
      [x,y,z]=a
      if(z)z--
      else y--
      c++,x--
      if(y>x)a=[y,x,z]
      else a=[x,y,z]
      s=x+y+z
    }
  return c
}