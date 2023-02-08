function connectFour(b) {
    console.log(b)
    b=b.map(e=>{
        e.push(0,0,0,0)
        e.unshift(0,0,0,0)
        return e
    })
    b.push(Array(b[0].length+5).fill(0)),b.push(Array(b[0].length+5).fill(0)),b.push(Array(b[0].length+5).fill(0)),b.unshift(Array(b[b.length-1].length).fill(0)),b.unshift(Array(b[b.length-1].length).fill(0)),b.unshift(Array(b[b.length-1].length).fill(0)),b.unshift(Array(b[b.length-1].length).fill(0))
    for(let i = 0; i < b.length; i++){
        for(let j = 0; j < b[i].length; j++){
                if(b[i][j]==='R'&&b[i][j+1]==='R'&&b[i][j+2]==='R'&&b[i][j+3]==='R'){
                    return 'R'
                }
                if(b[i][j]==='R'&&b[i+1][j]==='R'&&b[i+2][j]==='R'&&b[i+3][j]==='R'){
                    return 'R'
                }
                if(b[i][j]==='R'&&b[i+1][j+1]==='R'&&b[i+2][j+2]==='R'&&b[i+3][j+3]==='R'){
                    return 'R'
                }
                if(b[i][j]==='R'&&b[i-1][j-1]==='R'&&b[i-2][j-2]==='R'&&b[i-3][j-3]==='R'){
                    return 'R'
                }
                if(b[i][j]==='R'&&b[i-1][j+1]==='R'&&b[i-2][j+2]==='R'&&b[i-3][j+3]==='R'){
                    return 'R'
                }

                if(b[i][j]==='Y'&&b[i][j+1]==='Y'&&b[i][j+2]==='Y'&&b[i][j+3]==='Y'){
                    return 'Y'
                }
                if(b[i][j]==='Y'&&b[i+1][j]==='Y'&&b[i+2][j]==='Y'&&b[i+3][j]==='Y'){
                    return 'Y'
                }
                if(b[i][j]==='Y'&&b[i+1][j+1]==='Y'&&b[i+2][j+2]==='Y'&&b[i+3][j+3]==='Y'){
                    return 'Y'
                }
                if(b[i][j]==='Y'&&b[i-1][j-1]==='Y'&&b[i-2][j-2]==='Y'&&b[i-3][j-3]==='Y'){
                    return 'Y'
                }
                if(b[i][j]==='Y'&&b[i-1][j+1]==='Y'&&b[i-2][j+2]==='Y'&&b[i-3][j+3]==='Y'){
                    return 'Y'
                }
        }
    }
    return b.flat().includes('-')?'in progress':'draw'
}
  console.log(connectFour(
 [['-','-','-','-','-','-','-'],
  ['-','-','-','-','-','-','-'],
  ['-','-','-','R','R','R','R'],
  ['-','-','-','Y','Y','R','Y'],
  ['-','-','-','Y','R','Y','Y'],
  ['-','-','Y','Y','R','R','R']]))
  console.log(connectFour( [
    [
      '-', '-', '-',
      '-', '-', '-',
      '-'
    ],
    [
      '-', '-', '-',
      '-', '-', '-',
      '-'
    ],
    [
      '-', '-', '-',
      '-', 'Y', '-',
      '-'
    ],
    [
      '-', '-', '-',
      'Y', 'R', '-',
      '-'
    ],
    [
      '-', 'R', 'Y',
      'R', 'Y', '-',
      '-'
    ],
    [
      'R', 'Y', 'R',
      'Y', 'R', 'Y',
      'R'
    ]
  ]))
  console.log(connectFour( [
    [
      'Y', 'R', 'Y',
      'R', 'Y', 'R',
      'Y'
    ],
    [
      'R', 'Y', 'R',
      'R', 'Y', 'R',
      'Y'
    ],
    [
      'Y', 'Y', 'R',
      'R', 'R', 'Y',
      'R'
    ],
    [
      'R', 'R', 'Y',
      'Y', 'Y', 'R',
      'Y'
    ],
    [
      'Y', 'Y', 'Y',
      'R', 'Y', 'R',
      'Y'
    ],
    [
      'R', 'Y', 'R',
      'R', 'R', 'Y',
      'R'
    ]
  ]))
  console.log(connectFour([
    [
      '-', '-', '-',
      '-', '-', '-',
      '-'
    ],
    [
      '-', '-', '-',
      '-', '-', '-',
      '-'
    ],
    [
      '-', 'R', '-',
      '-', '-', '-',
      '-'
    ],
    [
      '-', 'R', 'Y',
      '-', '-', '-',
      '-'
    ],
    [
      '-', 'R', 'Y',
      'Y', 'Y', 'Y',
      '-'
    ],
    [
      '-', 'Y', 'R',
      'R', 'Y', 'R',
      '-'
    ]
  ]))