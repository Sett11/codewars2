function getDay(d, b){
  if(d<=31)return `January, ${d}`
  if(d<59&&d>31)return `February, ${d-31}`
  if(d===59)return `February, 28`
  if(b===true&&d===60)return `February, 29`
  if(b===false&&d===60)return `March, 1`
  if(b===false)d+=1
  if(d>60&&d<=91)return `March, ${d-60}`
  if(d>91&&d<=121)return `April, ${d-91}`
  if(d>121&&d<=152)return `May, ${d-121}`
  if(d>152&&d<=182)return `June, ${d-152}`
  if(d>182&&d<=213)return `July, ${d-182}`
  if(d>213&&d<=244)return `August, ${d-213}`
  if(d>244&&d<=274)return `September, ${d-244}`
  if(d>274&&d<=305)return `October, ${d-274}`
  if(d>305&&d<=335)return `November, ${d-305}`
  return `December, ${d-335}`
}
console.log(getDay(182,true))