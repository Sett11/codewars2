function helpJesse(a){
  return a.map(e=>`Pour ${e.amount} mL of ${e.solution} into a ${e.instrument}`+(e.note?` (${e.note})`:''))
}

console.log(helpJesse([{
  solution : "Sodium Chloride",
  amount: 5,
  instrument: "Graduated Cylinder"   
},
{
  solution : "Hydrochloric Acid",
  amount: 250,
  instrument: "Boiling Flask"   
},
{
  solution : "Water",
  amount: 100,
  instrument: "Erlenmeyer Flask",
  note: "Do NOT mess this step up, Jesse!"
}]))