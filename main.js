generateMarkdowns=(m,t,u)=>m=='link'?`[${t}](${u})`:m=='img'?`![${t}](${u})`:'```'+`${u}\n`+t+'\n```'

console.log(generateMarkdowns('link','hyperlink','https://en.wikipedia.org/wiki/Hyperlink'))
console.log(generateMarkdowns('img','this should be an image','https://github.com/codewars/gna.jpg'))
console.log(generateMarkdowns('code',"function generateMarkdowns(markdown,text,urlOrLanguage) {\n// write your code here\n};",'javascript'))