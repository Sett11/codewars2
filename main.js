format=(s,o)=>{
  return s.replace(/\{/g,'(').replace(/\}/g,')').replace(/\(([^)^(]+)\)/g,e=>o[e.replace(/[\(\)]/g,'')]!==undefined?o[e.replace(/[\(\)]/g,'')]:`{${e.replace(/[\(\)]/g,'')}}`)
}

console.log(format('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', 0]))