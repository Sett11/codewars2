function anyArrows(arrows){
  return arrows.some(el => !el.damaged);
}
console.log(anyArrows([{range: 5, damaged: true}, {range: 10, damaged: true}, {damaged: true}]))