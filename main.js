function ipToNum(ip) {
  return parseInt(ip.split`.`.map((e,i,v)=>{
    e=(+e).toString(2)
    return '0'.repeat(8-e.length)+e
  }).join``,2)
}

function numToIp(n,a=[]) {
n=(n).toString(2),n='0'.repeat(32-n.length)+n
for(let i=0;i<n.length;i+=8)a.push(n.slice(i,i+8))
return a.map(e=>parseInt(e,2)).join`.`
}

console.log(numToIp(167772160))