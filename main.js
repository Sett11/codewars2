theJanitor=s=>Array(26).fill(1).map((_,i)=>String.fromCharCode(i+97)).map(e=>!s.includes(e)?0:s.indexOf(e)===s.lastIndexOf(e)?1:s.lastIndexOf(e)-s.indexOf(e)+1)


console.log(theJanitor('rkuhsxtflzvytbtwxyarsglibmhfmmikyolfmopbtkzxezjahq'))