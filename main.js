const sequence=(f)=>{
  return {
    take(n){
      let a=[],c=0
      while(a.length<n){a.push(f(c));c++}
      return a
    },
    takeWhile(fn){
      let a=[],c=0,z=0
      while(z<200){if(fn(f(c)))a.push(f(c));c++,z++}
      return a
    }
  }
}

console.log(sequence( n => n * 4 ).takeWhile( n => n < 20 ))