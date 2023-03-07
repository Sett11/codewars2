function csvColumns(c,i) {
	c=c.split`\n`.map(e=>e.split`,`),i=i.filter(e=>e<=c[0].length-1)
  return !i.length?'':c.map(e=>e.filter((e,j)=>i.includes(j)).join`,`).join`\n`
}

console.log(csvColumns("1,2,3\n4,5,6",[0, 1]))
console.log(csvColumns("a,b,c,d,e\n1,2,3,4,5\nf,g,h,i,j", [1, 3, 5, 7]))