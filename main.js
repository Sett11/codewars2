function sc(room){
  const arr = [], res = [], t = room.map(el=>{
    return el.map(ul=>{
      if(ul!=' '){
        arr.push(ul)
        ul=' '
        return ul
      }
      ul=' '
      return ul
    })
  }), check = arr.length<=4?2:arr.length>4&&arr.length<=9?3:arr.length>9&&arr.length<=16?4:arr.length>16&&
  arr.length<=25?5:arr.length>25&&arr.length<35?6:arr.length>=35&&arr.length<42?7: Math.ceil(Math.sqrt(arr.length))
  for(let i = 0; i < arr.length; i+=check){
    res.push(arr.slice(i,i+check))
  }
  for(let i = 0; i < res.length; i++){
    for(let j = 0; j < res[i].length; j++){
      t[i][j] = res[i][j]
    }
  }
  return t
}
console.log(sc([ [ '6', ' ', '9', ' ', ' ', ' ', ' ', 'q', 'K' ],
[ ' ', ' ', 'j', 's', '@', ' ', ' ', '@', ' ' ],
[ 'm', ':', ' ', ' ', 'F', ' ', ' ', ' ', 'k' ],
[ ' ', ' ', '?', ' ', 'y', '7', ' ', '@', 'K' ],
[ ' ', ' ', ' ', ' ', 'l', ' ', ' ', '?', ' ' ],
[ ' ', ' ', 'd', ' ', '`', 'z', '0', ' ', ' ' ],
[ ' ', 'v', ' ', 'e', ']', ' ', 'p', ' ', '=' ],
[ 'R', 'v', 'K', 'f', ' ', '>', ' ', 'E', 'D' ],]
))
console.log(sc([
  ["a"," "," "," "," "],
  [" "," ","b"," "," "],
  [" "," "," "," "," "],
  [" ","c"," "," "," "],
  [" "," "," "," "," "]
  ]
))