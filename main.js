function compare(s1, s2) {
  if(s1 === null){
    s1 = ''
  }
  if(s2 === null){
    s2 = ''
  }
  if(s1.replace(/[A-Za-z]/g, '').length > 0){
    s1 = ''
  }
  if(s2.replace(/[A-Za-z]/g, '').length > 0){
    s2 = ''
  }
  let newS1 = s1.toUpperCase().split('').map((el,i) => el.charCodeAt(el))
  let newS2 = s2.toUpperCase().split('').map((el,i) => el.charCodeAt(el))
  return  newS1.reduce((acc, curr) => acc+curr, 0) === newS2.reduce((acc, curr) => acc+curr, 0)
 }
 console.log(compare(null, ""))