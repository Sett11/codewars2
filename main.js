 sc =r=> {
  r=typeof r=='object'?r:(r+'').split``
return r.join``==r.reverse().join``
}


console.log(sc([11,12,13,12,11]))