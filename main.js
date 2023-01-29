function sc(e){
  let check = '2'
  for(let i = 0; i < e.length; i++){
    if(check===e[i][0]){
      check=e[i][2]
    }
   else if(check===e[i][2]){
      check=e[i][0]
    }
  }
  return check
}
console.log(sc(["1-3","3-2","3-2","2-3","1-2","3-2","3-1","1-2","1-2","2-3","1-2"]))