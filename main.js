function extendPinocchioNose(s){
  return s.split` `.some((e,i,v)=>(v[i+1]||'').match(e))
}

console.log(extendPinocchioNose("Im ver very good student,i have great grades."))