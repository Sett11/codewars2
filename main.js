function compress(n) {
    console.log(n)
    m = n.slice()
      m.push('&')
      for(let i = 0; i < m.length; i++){
          if(m[i]===m[i+1]){
              let tmp = m[i]
              for(let j = i+1; j < m.length; j++){
                  if(j===m.length-1&&m[j]===tmp){
                      m = m.slice(0,i).concat([[`${tmp}*${j-i-1===1?2:j-i-1}`]]).concat(m.slice(j))
                          break
                  }
                  if(m[j]!==tmp){
                      m = m.slice(0,i).concat([[`${tmp}*${j-i-1===1?2:j-i-1+1}`]]).concat(m.slice(j))
                      break
                  }
              }
          }
          if(Math.abs(m[i+1]-m[i])===1&&Math.abs(m[i+2]-m[i+1])===1){
              for(let j = i+1; j < m.length; j++){
                  if(Math.abs(m[j+1]-m[j])!==1){
                      m = m.slice(0,i).concat([[`${m[i]}-${m[j]}`]]).concat(m.slice(j))
                      break
                  }
              }
          }
          if(m[i+1]-m[i]===m[i+2]-m[i+1]&&m[i+1]-m[i]!==1&&m[i+2]-m[i+1]!==1&&m[i]!==m[i+1]){
              let dmb = m[i+1]-m[i]
              for(let j = i+1; j < m.length; j++){
                  if(m[j+1]-m[j]!==dmb){
                      m = m.slice(0,i).concat([[`${m[i]}-${m[j]}/${Math.abs(dmb)}`]]).concat(m.slice(j))
                      break
                  }
              }
          }
          for(let i = 0; i < m.length-1; i++){
              if(typeof m[i]==='object'&&!m[i][0].match(/-\d+/g)){
                  continue
              }
              if(typeof m[i]==='object'&&typeof m[i+1]!=='object'&&m[i][0].match(/-/g)){
                let R = m[i][0].match(/-\d+/g)
                    if(R){
                        for(let j = 0; j < R.length; j++){
                            if(j!==0&&!m[i][0].match(/\//g)&&+R[j]===m[i+1]||Math.abs(+R[j])===Math.abs(m[i+2])){
                                m[i+1]='&'
                            }
                            if(+R[j]===m[i+1]||Math.abs(+R[j])===Math.abs(m[i+1])){
                                m.splice(i+1,1)
                                    i--
                            }
                        }
                    }else{
                        continue
                    }
              }
          }
      }
      return m.filter(el=>el!=='&').join`,`
  }

  console.log(compress([0, 2, 4, 5, 7, 6, 5, 5, 5, 5, 5]))
  console.log(compress([0, 2, 4, 5, 7, 8, 9]))
  console.log(compress([1,2,2,3]))
  console.log(compress([
    -30, -29, -28, -27,  38,  18,  20,  22,
     24, -45,  -1,  -1, -17, -17, -19, -21,
    -23, -25,  20,  -1,   9,  10,  11,  12,
     58,  57, -47, -46,  44,  44
  ]))
  console.log(compress([
    37,  36,  35,  34,  33,  50,  50, 50, -46,   0,  0,  0,
     0,   0, -19, -19,  43,  41,  39, 37, -10,  71, 72, 73,
    74, -33, -32, -31,  51,  50,  49, 48,  47, -24, 84, 82,
    80,  78,  99,  98,  14,  14,  14, 45, -20, -39, 83, 81,
    79,  77,   6,  35, -23, -22, -21, 64,  66,  68, 70, 72,
    63, -14,  70,  69,  68,  67,  66, 66
  ]))