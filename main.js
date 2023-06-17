function stress(s,ss=s.replace(/\d/g,''),sss=+s.replace(/\D/g,'')){
  const a=['ic','sion','tion','ious'],b=['ty','al','ise','ate']
  return !a.includes(ss)&&!b.includes(ss)||sss<3||sss>11?'invalid word':a.includes(ss)?(sss-1)+'pen':(sss-2)+'ante-pen'
}

console.log(stress('10sion'))