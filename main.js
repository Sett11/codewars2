lettersToNumbers=s=>[...s].map(e=>e.match(/[0-9]/)?+e:e.match(/[a-z]/)?parseInt(e,36)-9:e.match(/[A-Z]/)?(parseInt(e,36)-9)*2:0).reduce((a,c)=>a+c,0)

   
   console.log(lettersToNumbers("ILoveYou"))