function sortString(s){ 
  let check=[...s.toLowerCase()].sort(),arr=[],str=[...s].map((e,i)=>!e.match(/[a-z]/g)&&!e.match(/[A-Z]/g)?arr.push([e,i]):null),res=[...s.replace(/[\W_]/g,'')].map(e=>[e,check.indexOf(e.toLowerCase())]).sort((a,b)=>a[1]-b[1]).map(e=>e[0]).join``
  for(let i=0;i<arr.length;i++){res=res.slice(0,arr[i][1])+arr[i][0]+res.slice(arr[i][1])}return res
}
  console.log(sortString(" MkWD{RB=//k-^ J@,xH Vfi uAz+$ kV _[ }a!}%pSBwn !kKB (b  q PQF +}wS  .kfU r wFNEs#NsR UVMdG"))