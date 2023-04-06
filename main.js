function hungrySeven(a){
  for(let i=0;i<a.length-2;i++){
    let t=a.slice(i,i+3)
    if(t.join``==='789'){
      t.push(t.shift())
      a=a.slice(0,i).concat(t).concat(a.slice(i+3))
      i-=2
    }
  }
  return a
}

  console.log(hungrySeven([7,7,7,8,9]))