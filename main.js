function findSub(s,a,b,c,r=[]){
    for(let i=0;i<s.length;i++){
        if(s[i]===a){
            for(let j=i+1;j<s.length;j++){
                if(s[j]===s[i]){
                    i=j-1;break
                }
                if(s[j]===b){
                    r.push(s.slice(i,j+1));i=j;break
                }
            }
        }
    }
    r=r.map((e,i)=>[e,i,[...e].filter(u=>u===c).length]).sort((a,b)=>b[2]-a[2]||a[1]-b[1]).filter(e=>e[0].includes(c))
    return r.length?r[0][0]:''
}

  console.log(findSub("((( )))((  ))",'(',')',' '))