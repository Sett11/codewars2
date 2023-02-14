function isSolved(b) {
    let count=3
   while(count){
    for(let i = 0; i < b.length-2; i++){
        for(let j = 0; j < b.length-2; j++){
            if(b[i][j]===0&&b[i][j+1]===1&&b[i][j+2]===1||b[i][j]===0&&b[i+1][j]===1&&b[i+2][j]===1||b[i][j]===0&&b[i+1][j+1]===1&&b[i+2][j+2]===1 || b[i][j]===0&&b[i][j+1]===2&&b[i][j+2]===2||b[i][j]===0&&b[i+1][j]===2&&b[i+2][j]===2||b[i][j]===0&&b[i+1][j+1]===2&&b[i+2][j+2]===2)return -1
            if(b[i][j]===1&&b[i][j+1]===1&&b[i][j+2]===1||b[i][j]===1&&b[i+1][j]===1&&b[i+2][j]===1||b[i][j]===1&&b[i+1][j+1]===1&&b[i+2][j+2]===1)return 1
            if(b[i][j]===2&&b[i][j+1]===2&&b[i][j+2]===2||b[i][j]===2&&b[i+1][j]===2&&b[i+2][j]===2||b[i][j]===2&&b[i+1][j+1]===2&&b[i+2][j+2]===2)return 2
        }
    }b=b.map(e=>e.reverse()).reverse()
    count--
   }return b.some(e=>e.some(u=>u===0))?-1:0
}
  console.log(isSolved(
   [[0,0,1],
    [0,1,2],
    [2,1,0]]))