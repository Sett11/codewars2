function sabb(s, val, happiness){
  return s.replace(/[^sabticl]/g, '').length + val + happiness > 22 ? 'Sabbatical! Boom!' : 'Back to your desk, boy.'
}
console.log(sabb('Can I have a sabbatical?', 5, 5))