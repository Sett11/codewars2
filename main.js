const twoSum=(n,t)=>{
    for(let i=-1;++i<n.length;){
      let a=n.slice(i+1).findIndex(e=>t-e===n[i])
      if(a!==-1)return [i,a+i+1]
    }
}

console.log(twoSum([3,2,4],6))