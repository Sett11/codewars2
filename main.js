function sort(s) {
  s=s.map(el=>Object.entries(el))
  .sort((a,b)=>b[1][1]-a[1][1]||a[2][1].match(/ .+/g)[0][1].localeCompare(b[2][1].match(/ .+/g)[0][1])||a[0][1]-b[0][1])
  let str = ''
  for(let i = 0; i < s.length; i++){
    str+=`${s[i][2][1]},`
  }
  return str.slice(0,str.length-1)
}


class Student {
  constructor(age, gpa, fullName) {
    this.age = age;
    this.gpa = gpa;
    this.fullName = fullName;
  };
};
console.log(sort([new Student(23, 88, "David Goodman"), 
new Student(25, 82, "Mark Rose"), 
new Student(22, 90, "Jane Doe"),
new Student(25, 90, "Jane Dane")]))