roomMates=(r,f,c=(f-1)*6)=>r.slice(c,c+6).filter(e=>e)
  
  console.log(roomMates([ "Jill", "Jackson", "Jan", "Eve", "", "John", "Jimmy", "Tom", "", "Duke" ],2))