function ipToInt32(ip){
  return ip.split`.`.reduce((acc,curr)=>acc*256 + +curr)
}
console.log(ipToInt32("128.32.10.1"))