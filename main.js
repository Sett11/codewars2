function acronymBuster(s){
  const o={
    'KPI':'key performance indicators',
    'EOD':'the end of the day',
    'TBD':'to be decided',
    'WAH':'work at home',
    'IAM':'in a meeting',
    'OOO':'out of office',
    'NRN':'no reply necessary',
    'CTA':'call to action',
    'SWOT':'strengths, weaknesses, opportunities and threats'
  }
  const f=x=>x.replace(/[^a-z]/gi,'')
  s=s.split` `.map(e=>!f(e).match(/[^A-Z]/)&&!o[f(e)]&&f(e).length>2?0+e:!f(e).match(/[^A-Z]/)&&f(e).length>2?o[f(e)]+e.replace(/[a-z]/gi,''):e)
  for(let i=0;i<s.length-1;i++)if(s[i].includes('.'))s[i+1]=s[i+1].charAt(0).toUpperCase()+s[i+1].slice(1)
  return s.some(e=>e[0]==='0')?`${s.filter(e=>e[0]==='0')[0].slice(1)} is an acronym. I do not like acronyms. Please remove them from your email.`:s.join` `.charAt(0).toUpperCase()+s.join` `.slice(1)
}

console.log(acronymBuster('BRB I need to go into a KPIs meeting before EOP'))
console.log(acronymBuster("Going to WAH today. NRN. OOO"))