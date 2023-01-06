function lineupStudents(s){
  return s.split` `.sort((a,b)=> b.length - a.length || b.localeCompare(a))
}
console.log(lineupStudents("xxa xxb xxc xxd xa xb xc xd"))