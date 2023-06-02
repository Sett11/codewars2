const o={fiveInOne : ['8 weeks', '12 weeks', '16 weeks'],
pneumococcal : ['8 weeks', '16 weeks'],
rotavirus : ['8 weeks', '12 weeks'],
meningitisB : ['8 weeks', '16 weeks', '12 months'],
hibMenC : ['12 months'],
measlesMumpsRubella : ['12 months', '40 months'],
fluVaccine : ['september','october','november'],
preSchoolBooster : ['40 months']}

function vaccineList(a,s,m,r=[]){
  for(let i in o)for(let j=-1;++j<o[i].length;)if(o[i][j]===a||o[i][j]===s||o[i][j]===m)r.push(i)
  return [...new Set(r)].map(e=>e==='fluVaccine'?'offer fluVaccine':e).sort()
}

console.log(vaccineList('12 weeks','up-to-date','december'))
console.log(vaccineList('12 months','16 weeks','june'))
console.log(vaccineList('40 months','12 months','october'))