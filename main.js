getRectangleString=(w,h,s='*'.repeat(w))=>h==1&&w==1?'*\r\n':h==2&&w==1?'*\r\n*\r\n':s+'\r\n'+Array(h-2).fill('*'+' '.repeat(w-2)+'*').join`\r\n`+(h>2?'\r\n':'')+s+'\r\n'

console.log(getRectangleString(2,2))