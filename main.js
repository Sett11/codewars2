function shouldIBeTired(d){
  return d.filter(e=>e[1]==='Drive').map(e=>e[0].split`-`.map(u=>u.split`:`.map(Number))).map(e=>(e[1][0]-e[0][0])*60+(e[1][1]-e[0][1])).reduce((a,c)=>a+c,0)/60<9
}
console.log(shouldIBeTired([ ["7:00-10:30","Drive"],
["10:30-10:45","Rest"],
["10:45-11:45","Drive"],
["11:45-12:15","Rest"],
["12:15-16:45","Drive"],
["16:45-20:15","Work"]]))