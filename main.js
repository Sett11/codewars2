function zipvalidate(p){
  console.log(p)
  return p.length!==6||p.match(/\D/g)||p.match(/^0|^5|^7|^8|^9/g)?false:true
}
console.log(zipvalidate('198328'))