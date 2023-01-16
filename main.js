function sortDict(dict) {
  return Object.entries(dict)
  .map(el=>el.map(ul=>typeof ul !== 'number' && Number(ul)===Number(ul)? Number(ul):ul))
  .sort((a,b)=>b[1]-a[1])
}
console.log(sortDict({'a':6,'b':2,'c':4}))