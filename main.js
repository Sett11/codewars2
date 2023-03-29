function timeMath(t1,o,t2,a=[0,0,0]) {
  t1=t1.split`:`,t2=t2.split`:`
  a[2]=eval(t1[2]+o+t2[2])
  if(a[2]===60){a[2]=0,a[1]+=1}
  if(a[2]>60){a[2]=a[2]-60,a[1]+=1}
  if(a[2]<0){a[2]=60+a[2],a[1]-=1}
  a[1]+=eval(t1[1]+o+t2[1])
  if(a[1]===60){a[1]=0,a[0]+=1}
  if(a[1]>60){a[1]=a[1]-60,a[0]+=1}
  if(a[1]<0){a[1]=60+a[1],a[0]-=1}
  a[0]+=eval(t1[0]+o+t2[0])
  if(a[0]>=24)a[0]=a[0]-24
  if(a[0]<0)a[0]=24+a[0]
  return a.map(e=>'0'.repeat(2-(e+'').length)+e+'').join`:`
}

console.log(timeMath('01:24:31', '+', '22:35:28'))