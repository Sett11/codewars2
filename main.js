christmasTree=(h,a=Array(h).fill('*'))=>{
  for(let i=0;i<a.length;i++){
    a[i]=' '.repeat(a.length-i-1)+'*'.repeat(i)+a[i]+'*'.repeat(i)+' '.repeat(a.length-i-1)
  }
  return a.join`\n`
}
console.log(christmasTree(5))