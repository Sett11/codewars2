function thirstyRobot(arr){
  let a=arr.map(e=>e<=8?'b':e>15?'l':'w'),l=a.includes('l'),b=a.length-a.slice().reverse().indexOf('b'),w=a.indexOf('w')
  if(b>a.length)b=-1
  return (((w>-1&&b>=-1)&&b<=w)||(w==-1&&b==-1)||(w==-1&&b!=-1))?!l?'Fine':'Wonky robot':!l?'Oh dear':'Poor robot'
}

console.log(thirstyRobot([ 62.89, 8, 8, 4, 13 ]))
