smartSum=(...a)=>[...a].flat(10).reduce((a,c)=>a+c,0)


console.log(smartSum(1,2,3,[5,6,7],10,9))