function leftRightOrBoth(s,a=[...s.toLowerCase()]){
  const l='12345!@#$%qwertasdfgzxcvb ',r=`67890^&*()yuiophjkl;:'"nm,./NM<>? `
  return !s||/^ +$/.test(s)?'':a.every(e=>l.includes(e))?'Left':a.every(e=>r.includes(e))?'Right':'Both'
 }

 console.log(leftRightOrBoth('qwert'))