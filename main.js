function cmp(a, b) {
  console.log(a, b)
  a=a.split`.`.map(Number), b=b.split`.`.map(Number),c=0
  if(a.length<b.length)c=b.length-a.length;while(c){a.push(0);c--}
  if(b.length<a.length)c=a.length-b.length;while(c){b.push(0);c--}
  for(let i = 0; i < Math.max(a.length,b.length); i++){if(a[i]>b[i])return 1;if(b[i]>a[i])return -1}
  return 0
}
console.log(cmp('1.20', '1.5'));
